import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify  } from "hono/jwt";
import { SignupInputs, SigninInputs, signupInputs, signinInputs } from "@chandrashekharchoudha/vichar-common";
export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const {success} = signupInputs.safeParse(body);
    if(!success){
        c.status(411)
        return c.text("Invalid signup inputs ")
    }
    try{
        const user = await prisma.user.create({
            data : {
                email : body.email,
                password : body.password,
                name : body.name
            }
        })

        const jwt = await sign({id : user.id}, c.env.JWT_SECRET)
        return c.text(jwt);

    } catch(e){
        c.status(411);
        return c.text("Problem while signing up")
    }
})

userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const result = signinInputs.safeParse(body)
    if(!result.success){
        c.status(411)
        console.log(result.error.issues)
        return c.text("Invalid signin inputs")
    }
    try{
        const user = await prisma.user.findFirst({
            where : {
                email : body.email,
                password : body.password 
            }
        })
        if(!user){
            c.status(403);
            return c.text("wrong credentials or user does not exists")
        }

        const jwt = await sign({id : user.id}, c.env.JWT_SECRET)
        return c.text(jwt)

    } catch(e){
        console.log(e);
        c.status(411)
        return c.text("Invalid")
    }
})


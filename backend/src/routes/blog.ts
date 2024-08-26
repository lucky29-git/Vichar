import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { blogInputs, updateBlogInputs } from "@chandrashekharchoudha/vichar-common";

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : string
    }
}>();

blogRouter.all('/*', async(c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const authHeader = c.req.header("authorization") || "" ;
    const user = await verify(authHeader, c.env.JWT_SECRET)

    if(user){
        
        c.set('userId', user.id as string);
        await next();
      }
      else{
        c.status(403);
        return c.json({
          message : "You are not logged in "
        })
      }

})

blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const userId = c.get("userId")
    const {success} = blogInputs.safeParse(body)
    if(!success){
        c.status(411)
        return c.text("Invalid blog inputs")
    }

    try{
        const blog = await prisma.post.create({
            data : {
                authorId : userId,
                title : body.title,
                content : body.content,
            }
        })
        return c.json({
            id : blog.id 
        })

    } catch(e){
        console.log(e);
        c.status(411)
        return c.text("Post blog error")
    }

})

blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = updateBlogInputs.safeParse(body)
    if(!success){
        c.status(411)
        return c.text("Invalid blog inputs")
    }

    const blog = await prisma.post.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content
        }
    })

    return c.json({
        id : blog.id
    })

})

blogRouter.get('/get/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param("id")

    try{
        const blog = await prisma.post.findFirst({
            where : {
                id : id
            },
            select : {
                id : true,
                title : true,
                content : true,
                author : {
                    select : {
                        name : true
                    }
                }
            }
    
        })

        return c.json({blog})
    } catch (e){
        c.status(411)
        return c.text("Error while Fetching blog")
    }
    
})

blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select : {
            id : true,
            title : true,
            content : true,
            author : {
                select :{
                    name : true
                }
            }
        }
    })
    return c.json({
        blogs
    })
})
blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
})
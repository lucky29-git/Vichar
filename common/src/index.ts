import {z} from 'zod';

export const signupInputs = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export type SignupInputs = z.infer<typeof signupInputs>;

export const signinInputs = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

export type SigninInputs = z.infer<typeof signinInputs>

export const blogInputs = z.object({
    title : z.string().min(1, {message : "Title cannot be empty"} ),
    content : z.string().min(1, {message : "Content cannot be empty"})
})

export type BlogInputs = z.infer<typeof blogInputs>

export const updateBlogInputs = z.object({
    title : z.string().min(1, {message : "Title cannot be empty"} ),
    content : z.string().min(1, {message : "Content cannot be empty"}),
    id : z.string()
})

export type UpdateBlogInputs = z.infer<typeof updateBlogInputs>
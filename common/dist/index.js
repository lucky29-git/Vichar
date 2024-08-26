"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInputs = exports.blogInputs = exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = require("zod");
exports.signupInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.signinInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.blogInputs = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "Title cannot be empty" }),
    content: zod_1.z.string().min(1, { message: "Content cannot be empty" })
});
exports.updateBlogInputs = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "Title cannot be empty" }),
    content: zod_1.z.string().min(1, { message: "Content cannot be empty" }),
    id: zod_1.z.string()
});

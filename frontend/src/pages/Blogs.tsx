import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PenSquare, PenLine } from "lucide-react"
import { BlogCard } from '@/components/ui/BlogCard'
// import { BlogCard } from './BlogCard'

// Mock data for blog posts
const blogPosts = [
  { 
    id: 1, 
    title: "Getting Started with React", 
    content: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and guide you through creating your first React application. We'll explore concepts like components, state, and props, which are fundamental to understanding how React works.",
    author: {
      name: "Jane Doe",
      avatar: "/avatars/jane-doe.png"
    },
    date: "June 1, 2023",
    minuteRead: 5
  },
  { 
    id: 2, 
    title: "Advanced TypeScript Techniques", 
    content: "TypeScript, a typed superset of JavaScript, offers powerful features for large-scale application development. This post delves into advanced TypeScript techniques that can help you write more robust and maintainable code. We'll cover topics such as conditional types, mapped types, and the infer keyword.",
    author: {
      name: "John Smith",
      avatar: "/avatars/john-smith.png"
    },
    date: "June 5, 2023",
    minuteRead: 8
  },
  { 
    id: 3, 
    title: "The Future of Web Development", 
    content: "Web development is constantly evolving, with new technologies and methodologies emerging regularly. In this post, we'll explore upcoming trends that are likely to shape the future of web development. From WebAssembly to AI-driven development tools, we'll discuss how these innovations might impact the way we build web applications.",
    author: {
      name: "Alice Johnson",
      avatar: "/avatars/alice-johnson.png"
    },
    date: "June 10, 2023",
    minuteRead: 6
  },
]

export const Blogs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <a href="/" className="flex items-center justify-center">
          <PenSquare className="h-6 w-6 text-primary mr-2" />
          <span className="text-2xl font-bold text-primary">Vichar</span>
        </a>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => window.location.href = '/publish'}>
            <PenLine className="h-4 w-4 mr-2" />
            Write
          </Button>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem onClick={() => window.location.href = '/profile'}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.location.href = '/signout'}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
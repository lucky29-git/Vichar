import { Button } from "@/components/ui/button"
import { PenSquare, Lightbulb, Users, Zap, PenLine, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <a href="/" className="flex items-center justify-center">
          <PenSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary" onClick={() => {navigate('/')}} >Vichar</span>
        </a>
        <nav className="flex space-x-4 mx-auto">
          <Button variant="ghost" className="text-sm font-medium">
            Home
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            About
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Contact
          </Button>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden sm:flex items-center space-x-1">
            <PenLine className="h-4 w-4" />
            <span onClick={() => {navigate('publish')}}>Write</span>
          </Button>
          
          <Button onClick={() => {navigate('signin')}}>Sign In</Button>
          
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Share Your Thoughts with the World
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Vichar is the perfect platform for bloggers to express their ideas, connect with readers, and make an impact.
                </p>
                <p className="text-lg font-semibold text-primary mt-6 ">
                  Think, Write, Share – Vichar.
                </p>
              </div>
              <Button className="transition-transform hover:scale-105 " onClick={() => {navigate('signup')}}>Get Started</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why Choose Vichar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Inspire</h3>
                <p className="text-muted-foreground mt-2">Share your unique perspective and inspire others</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-muted-foreground mt-2">Build a community around your content</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p className="text-muted-foreground mt-2">Expand your reach and grow your audience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PenSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Create</h3>
                <p className="text-muted-foreground mt-2">Powerful tools to bring your ideas to life</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Sparkles className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Write with AI</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                Enhance your writing process with our advanced AI assistant. Get suggestions, overcome writer's block, and polish your content effortlessly.
              </p>
              <Button variant="outline" className="mt-8" onClick={() => {navigate('publish')}}>
                Try AI Writing
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Explore Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {["Technology", "Travel", "Food", "Lifestyle", "Health", "Fashion", "Business", "Art"].map((category) => (
                <div key={category} className="bg-muted rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
                  <h3 className="font-semibold">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Blogging Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl mt-4">
                  Join Vichar today and start sharing your thoughts with the world.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mt-8">
                <Button className="bg-background text-primary hover:bg-background/90" onClick={() => {navigate('signup')}}>
                  Sign Up
                </Button>
                <p className="text-xs text-primary-foreground/70 mt-4">
                  By signing up, you agree to our{" "}
                  <a href="#" className="underline underline-offset-2">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Vichar Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

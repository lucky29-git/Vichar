import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PenSquare, Github, Twitter } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { SigninInputs } from "@chandrashekharchoudha/vichar-common"
import { BACKEND_URL } from "@/config"
import axios from "axios"

export const Signin = () => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SigninInputs>({
    email : "" ,
    password : ""
  })

  
    async function sendRequest(){
      try{
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
        const jwt = res.data
        localStorage.setItem("token", jwt)
        navigate('/blogs')

      }catch(e){
        console.log(e);
        alert("Invalid credentials")
      }
    }
  
  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="flex items-center justify-center mb-8">
            <PenSquare className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">Vichar</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">Sign in to your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link className="font-medium text-primary hover:underline" to={'/signup'}>
              Sign up
            </Link>
          </p>
          <div>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1" onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email : e.target.value
                  })
                }} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1" onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password : e.target.value
                  })
                }} />
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-muted rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full" onClick={sendRequest}>
                Sign in
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <Github className="h-5 w-5 mr-2" />
                Github
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-1 bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center p-8">
        <div className="max-w-2xl text-center text-white">
          <blockquote className="text-3xl font-semibold italic mb-4">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="text-xl font-medium">― Steve Jobs</p>
        </div>
      </div> */}
    </div>
  )
}
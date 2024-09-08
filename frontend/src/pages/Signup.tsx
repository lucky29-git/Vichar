import { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PenSquare, Github, Twitter } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom'
import { SignupInputs } from '@chandrashekharchoudha/vichar-common'
import { BACKEND_URL } from '@/config'

export const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInputs>({
    name : "",
    email : "",
    password : ""
  })

  async function sendRequest(){
    try{
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
      const jwt = res.data;
      localStorage.setItem("token", jwt)
      navigate("blogs")

    } catch(e){
      console.log(e);
      alert("Request failed")
    }
  }

  // function handleChange(event : React.ChangeEvent<HTMLInputElement>){
  //   const {name, value} = event?.target;
  //   setPostInputs((prevInputs) => ({
  //     ...prevInputs,
  //     [name] : value,
  //   }))
  // }

  // function handleSubmit(event : React.FormEvent<HTMLFormElement>){
  //   event.preventDefault()
  //   sendRequest()
  // }
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="flex items-center justify-center mb-8">
            <PenSquare className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">Vichar</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">Create your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link className="font-medium text-primary hover:underline" to={'/signin'}>
              Sign in
            </Link>
            {/* <a href="#" className="font-medium text-primary hover:underline">
              Sign in
            </a> */}
          </p>
          <div>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" type="text" required className="mt-1" onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name : e.target.value
                  })
                }}  />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1" onChange ={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value
                  })
                }}  />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1" onChange ={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password : e.target.value
                  })
                }} />
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full" onClick={sendRequest}>
                Sign up
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
    </div>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom"
// add lazy loading
// import React, {lazy, Suspense} from 'react'
// const Signin = React.lazy(() => import("./pages/Signin") )
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import Landing from "./pages/Landing"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog:id" element={<Blog/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/" element={<Landing/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const Home=lazy(() => import("../pages/home"))
const About=lazy(() => import("../pages/about"))
const Skills=lazy(() => import("../pages/skills"))
const Contact=lazy(() => import("../pages/contact"))
const Projects=lazy(() => import("../pages/projects"))
const Certificates=lazy(() => import("../pages/certificates"))

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div> Please Wait, Loading... </div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/certificates' element={<Certificates/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App

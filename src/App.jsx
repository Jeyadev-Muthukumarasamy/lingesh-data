import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from '../component/Form'
import Login from "../component/Login"
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />}/>
        <Route path = "/Form" element = {<Form />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

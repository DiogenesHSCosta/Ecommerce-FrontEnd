
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Rodape from './components/Rodape/Rodape'


function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App

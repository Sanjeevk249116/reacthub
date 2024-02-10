import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Homes from '../components/Homes'
function MainRouters() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Homes/>}/>
    </Routes>
  )
}

export default MainRouters

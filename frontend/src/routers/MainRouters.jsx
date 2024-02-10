import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Homes from '../components/Homes'
import Charts from '../pages/Charts'
function MainRouters() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Homes/>}/>
      <Route path="/:username/rating-history" element={<Charts/>}/>
    </Routes>
  )
}

export default MainRouters

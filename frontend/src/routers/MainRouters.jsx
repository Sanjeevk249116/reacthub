import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Homes from '../components/Homes'
import Charts from '../pages/Charts'
import PrivateRoutes from '../components/PrivateRoutes'
function MainRouters() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Homes/>}/>
      <Route path="/:username/rating-history" element={
        <PrivateRoutes><Charts/></PrivateRoutes>
      }/>
    </Routes>
  )
}

export default MainRouters

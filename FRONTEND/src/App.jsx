import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Userlogout from './pages/Userlogout'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import Captainhome from './pages/Captainhome'
import Userprottectedwraper from './pages/Userprottectedwraper'
import Captainprotectedwraper from './pages/captainprotectedwraper'
import Captainlogout from './pages/Captainlogout'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<Userlogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-Signup' element={<CaptainSignup/>} />

        <Route path='/home' element={
          <Userprottectedwraper>
              <Home/>                       {/* wrap it by userprottectedwrap.jsx for autorization */}
          </Userprottectedwraper>
        }/>


        <Route path='/user/logout' element={
          <Userprottectedwraper>
              < Userlogout/>  
          </Userprottectedwraper>
        } />


        <Route path='/captainhome' element={
        <Captainprotectedwraper>
            <Captainhome/>
        </Captainprotectedwraper>
        }/>


        <Route path='/captain/logout' element={
          <Captainprotectedwraper>
              < Captainlogout/>  
          </Captainprotectedwraper>
        } />
      </Routes>

    </div>
  )
}

export default App
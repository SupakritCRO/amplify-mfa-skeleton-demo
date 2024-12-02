import { Routes, Route } from 'react-router-dom'
import Login from '../../pages/Auth/Login.tsx'
import Register from '../../pages/Auth/Register.tsx'
import { ForgotPasswordRoutes } from './ForgotPasswordRoute.tsx'


export const AuthRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
)

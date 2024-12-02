import { Routes, Route } from 'react-router-dom'
import ForgetPassword from '../../pages/Auth/ForgetPassword'
import ConfirmForgotPassword from '../../pages/Auth/ConfirmForgotPassword'

export const ForgotPasswordRoutes = () => (
  <Routes>
    <Route path='/' element={<ForgetPassword />} />
    <Route path='/confirm' element={<ConfirmForgotPassword />} />
  </Routes>
)

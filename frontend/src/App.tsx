import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import { useAppContext } from './context/AppContext'
import Activation from './pages/Activation'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'


const App = () => {
 const { isLoggedIn } = useAppContext()
  return (
    <BrowserRouter>
    <Routes>
      {isLoggedIn && (
        <Route path="/dashboard" element={<Dashboard />}></Route>
      )}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/activation" element={<Activation />} />
      <Route path="/" element={<LandingPage />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
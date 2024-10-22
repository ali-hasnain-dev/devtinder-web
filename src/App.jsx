import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navabr from "./Navabr"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import Body from "./Body"
import Profile from "./auth/Profile"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navabr /> */}
    </>
  )
}

export default App

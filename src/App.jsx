import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/auth/Signup"
import Body from "./components/Body"
import Profile from "./components/auth/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Body />} >
              <Route path="/" element={<Feed />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

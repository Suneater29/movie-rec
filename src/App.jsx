import { BrowserRouter } from 'react-router'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from "./pages/Home"
import Pick from "./pages/Pick"
import Recommendations from "./pages/Recommendations"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pick' element={<Pick/>}/>
        <Route path='/recommendations' element={<Recommendations/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

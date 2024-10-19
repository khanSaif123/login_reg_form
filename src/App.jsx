import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {


  return (
    <>
      <div className="flex w-[100%] h-[100vh] justify-center items-center">
        
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Register/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  )
}

export default App

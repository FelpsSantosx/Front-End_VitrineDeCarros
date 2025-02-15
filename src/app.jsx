import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/home"
import About from "./pages/about"
import CarDetails from "./pages/carDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carDetails/:id" element={<CarDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )

}

export default App
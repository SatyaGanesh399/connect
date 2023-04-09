import React from "react"
import { Routes, Route } from "react-router-dom"
import FirstPage from "../AuthPages/FirstPage"
import LoginPage from "../AuthPages/LoginPage"
import RegisterPage from "../AuthPages/RegisterPage"
import HomePage from "../HomePage"

function MainRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="homepage" element={<HomePage />} />
    </Routes>
  )
}

export default MainRouter

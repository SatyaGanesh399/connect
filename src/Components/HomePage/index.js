import React from "react"
import MainPage from "./MainPage"
import Feed from "./Feed"
import { Routes, Route } from "react-router-dom"
import Messages from "./Messages"
import Posts from "./Posts"
import Notifications from "./Notifications"
import ProfileSettings from "./ProfileSettings"

function HomePage() {
  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/profileSettings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  )
}

export default HomePage

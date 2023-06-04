// import React, from 'react'
import "./sass/main.scss"
import Features from "./sections/Features"
import FooterComp from "./sections/FooterComp"
import Gallery from "./sections/Gallery"
import HeaderComp from "./sections/HeaderComp"
import Homes from "./sections/Homes"
import Realtors from "./sections/Realtors"
import Sidebar from "./sections/Sidebar"
import StoryContent from "./sections/StoryContent"
import StoryPictures from "./sections/StoryPictures"

function App() {

  return (
    <div className="container">
      <Sidebar/>
      <HeaderComp/>
      <Realtors/>
      <Features/>
      <StoryPictures/>
      <StoryContent/>
      <Homes/>
      <Gallery/>
      <FooterComp/>
    </div>
  )
}

export default App

import React, { useState } from "react"
import TextSampleForm from "./components/TextSampleForm"
import FontSizeSlider from "./components/FontSizeSlider"
import Fonts from "./components/Fonts"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [size, setSize] = useState(20)
  const [text, setText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  )
  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3">
            <div style={{ position: "sticky", top: 0 }}>
              <TextSampleForm text={text} setText={setText} />
              <FontSizeSlider size={size} setSize={setSize} />
            </div>
          </div>
          <div className="col-lg-9">
            <Fonts
              text={text}
              size={size}
              sort="date"
              title="Les plus récentes"
            />
            <Fonts
              text={text}
              size={size}
              sort="trending"
              title="Trending Fonts"
            />
            <Fonts
              text={text}
              size={size}
              sort="popularity"
              title="Les plus populaires"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

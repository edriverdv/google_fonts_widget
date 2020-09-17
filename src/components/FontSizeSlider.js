import React from "react"

const FontSizeSlider = ({ size, setSize }) => {
  const handleSliderChange = (e) => {
    setSize(e.target.value)
  }
  return (
    <>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        value={size}
        onChange={handleSliderChange}
      />
    </>
  )
}

export default FontSizeSlider

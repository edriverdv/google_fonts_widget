import React from "react"
import Font from "./Font"
import useGoogleFonts from "./../hooks/useGoogleFonts"
import GoogleFontLoader from "react-google-font-loader"

const Recent = (props) => {
  const { id, text, size, title, sort = "date" } = props
  const { fonts, loading } = useGoogleFonts(sort)
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          {!!fonts.length && (
            <section className="row mb-5">
              <GoogleFontLoader
                fonts={fonts.map((el) => ({
                  font: el.family,
                }))}
                subsets={["latin"]}
              />
              <hr />
              <h2 id={id} className="mb-3">
                <span className="badge bg-danger">{title}</span>
              </h2>
              {fonts.map((font) => (
                <Font key={font.family} text={text} size={size} {...font} />
              ))}
            </section>
          )}
        </>
      )}
    </>
  )
}

export default Recent

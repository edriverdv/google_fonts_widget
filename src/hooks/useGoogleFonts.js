import { useState, useEffect } from "react"

const useGoogleFonts = (sort = "date") => {
  const [fonts, setFonts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=${sort}&key=${API_KEY}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("something wrong")
      })
      .then((data) => {
        console.log(data.items.slice(0, 10))
        setFonts(data.items.slice(0, 10))
      })
      .catch((error) => {
        console.log(error.message)
      })
      .finally(() => setLoading(false))
  }, [sort])
  return { fonts, loading }
}

export default useGoogleFonts

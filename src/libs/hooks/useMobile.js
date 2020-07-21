import { useState, useEffect } from "react"
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const resizeHandler = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true)
    }

    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return { isMobile }
}

export default useMobile

import { useEffect, useState } from "react"
const useIntersectionObserver = (pageParentElement, pageChildElement) => {
  const [forceRerender, setForceRerender] = useState(false)
  const [isElementIntersecting, setIsElementingIntersecting] = useState(false)
  useEffect(() => {
    if (pageParentElement !== undefined) {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.isIntersecting && entry.intersectionRatio >= 0.5
            ? setIsElementingIntersecting(true)
            : setIsElementingIntersecting(false)
        })
      }, options)

      observer.observe(pageChildElement)
    } else {
      setForceRerender(true)
    }
  }, [forceRerender, pageChildElement, pageParentElement])
  return { isElementIntersecting }
}
export default useIntersectionObserver

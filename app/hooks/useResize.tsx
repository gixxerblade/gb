import { SetStateAction, useEffect, useRef, useState } from 'react'

interface Size {
  width: number
  height: number
}

export const useResize = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<Size['width']>(0);
  const [height, setHeight] = useState<Size['height']>(0);

  useEffect(() => {
    const handleSVGResize = () => {
      if (ref.current) {
        setWidth(window.innerWidth);
        setHeight(ref.current.clientHeight);
      }
    }
    window.addEventListener('resize', handleSVGResize)
    handleSVGResize();
    return () => window.removeEventListener('resize', handleSVGResize)
  }, [ref, width, height]);
  return { ref, width, height }
}
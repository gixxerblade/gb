import { useEffect, useRef, useState } from "react";
import { Link } from "remix";
import { Background } from "./components";
import { BG } from "./components/BG";
import { useResize } from "./hooks/useResize";
import { Nav } from "./Nav";

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const { ref, height, width } = useResize()
  // const ref = useRef<HTMLDivElement>(null)
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   const handleSVGResize = () => {
  //     if (ref.current) {
  //       setWidth(window.innerWidth);
  //       setHeight(ref.current.clientHeight);
  //     }
  //   }
  //   window.addEventListener('resize', handleSVGResize)
  //   handleSVGResize();
  //   return () => window.removeEventListener('resize', handleSVGResize)
  // }, [ref, width, height]);

  return (
    <div ref={ref}>
      <Nav />
      <BG opacity={0.1} fill="#ccc" width={width} height={height}>
        <div
          className="h-screen w-screen md:px-16"
        >
          {children}
        </div>
      </BG>
      <footer className="fixed w-screen bottom-0 bg-navy h-24 flex flex-row justify-center items-center">
        <div>
          <p className="text-white">
            &copy;
            {new Date().getFullYear()}
            {" "}
            <a href="https://www.thebicycle.com/">The Bicycle Shop</a>
          </p>
        </div>
      </footer>
    </div >
  );
}

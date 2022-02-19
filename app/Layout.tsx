import { BG } from "./components/BG";
import { useResize } from "./hooks/useResize";
import { Navigation } from "./components/Navigation/Navigation";
import { MobileNavigationParent } from "./components/Navigation/MobileNavigationParent";
import { Footer } from "./components/Footer";

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const { ref, height, width } = useResize()

  return (
    <div ref={ref}>
      <Navigation />
      <MobileNavigationParent />
      <BG opacity={0.1} fill="#ccc" width={width} height={height}>
        <div
          className="h-screen w-screen md:px-16"
        >
          {children}
        </div>
      </BG>
      <Footer />
    </div >
  );
}

import type { AppProps } from "next/app";
import { BG } from "../components/BG";
import { Footer } from "../components/Footer";
import { MobileNavigationParent } from "../components/Navigation/MobileNavigationParent";
import { Navigation } from "../components/Navigation/Navigation";
import { useResize } from "../hooks/useResize";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { ref, height, width } = useResize();

  return (
    <div className="bg-navy" ref={ref}>
      <Navigation />
      <MobileNavigationParent />
      <BG opacity={0.1} fill="#ccc" width={width} height={height}>
        <div className="h-screen w-screen md:px-16 bg-navy">
          <Component {...pageProps} />
        </div>
      </BG>
      <Footer />
    </div>
  );
};

export default MyApp;

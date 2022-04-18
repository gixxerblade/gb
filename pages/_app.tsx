import type { AppProps } from "next/app";
import Head from "next/head";
import { BG } from "../components/BG";
import { Footer } from "../components/Footer";
import { MobileNavigationParent } from "../components/Navigation/MobileNavigationParent";
import { Navigation } from "../components/Navigation/Navigation";
import { useResize } from "../hooks/useResize";
import "../styles/globals.css";

export const meta: { [key: string]: string } = {
  title: "Guerilla Bikes",
  "og:title": "Guerilla Bikes",
  "og:site_name": "Guerilla Bikes",
  copyright: "The Bicycle Shop",
  language: "EN",
  subject:
    "Independent bicycle shop established to serve the needs of the single speed cyclist",
  author: "Stephen Clark, sdclarkie@gmail.com",
  url: "https://guerrillabikes.com/",
  "og:url": "https://guerrillabikes.com/",
  "fb:page_id": "220015028148929",
  "fb:app_id": "",
  "og:country-name": "USA",
  "og:type": "website",
};

// Taken from Remix Source Code on their Meta tag https://github.com/remix-run/remix/blob/c44b6a5de714f3366bba6c25659738b11773425a/packages/remix-react/components.tsx#L677
const remixMetaTransform = (): React.ReactNode[] =>
  Object.entries(meta).map(([name, value]) => {
    if (!value) {
      return null;
    }

    if (["charset", "charSet"].includes(name)) {
      return <meta key="charset" charSet={value as string} />;
    }

    if (name === "title") {
      return <title key="title">{value}</title>;
    }

    // Open Graph tags use the `property` attribute, while other meta tags
    // use `name`. See https://ogp.me/
    let isOpenGraphTag = name.startsWith("og:");
    return [value].flat().map((content) => {
      if (isOpenGraphTag) {
        return (
          <meta
            content={content as string}
            key={name + content}
            property={name}
          />
        );
      }

      if (typeof content === "string") {
        return <meta content={content} name={name} key={name + content} />;
      }

      return <meta key={name + JSON.stringify(content)} {...content} />;
    });
  });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { ref, height, width } = useResize();

  return (
    <div className="bg-navy" ref={ref}>
      <Head>{remixMetaTransform()}</Head>
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

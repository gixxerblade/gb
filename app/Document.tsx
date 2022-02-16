import { ReactNode } from "react"
import { Links, LiveReload, Meta, MetaFunction, Scripts, ScrollRestoration } from "remix"

type Doc = {
  children: ReactNode;
  title?: string;
}
export const meta: MetaFunction = () => {
  return {
    title: "Guerilla Bikes",
    "og:title": "Guerilla Bikes",
    "og:site_name": "Guerilla Bikes",
    copyright: "The Bicycle Shop",
    language: "EN",
    subject: "Independent bicycle shop established to serve the needs of the single speed cyclist",
    author: "Stephen Clark, sdclarkie@gmail.com",
    url: "https://guerrillabikes.com/",
    "og:url": "https://guerrillabikes.com/",
    "fb:page_id": "220015028148929",
    "fb:app_id": "",
    "og:country-name": "USA",
    "og:type": "website"
  };
};

export const Document = (props: Doc) => {
  const { children, title } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="bg-navy">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

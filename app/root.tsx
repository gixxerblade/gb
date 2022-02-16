import styles from "./tailwind.css";
import { LinksFunction, LiveReload, Meta, MetaFunction, Outlet } from "remix";
import { Nav } from './Nav'
import { Layout } from "./Layout";
import { Document } from "./Document";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles 
    },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    }
  ];
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
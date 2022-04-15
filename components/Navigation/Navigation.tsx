import { default as NavLink } from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { links } from "../../constants/links";
import { MenuItem } from "./MenuItem";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Navigation = () => {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);
  const router = useRouter();

  return (
    <header className="z-1 w-screen sticky top-0 bg-navy hidden md:block">
      <nav className="bg-navy h-16" ref={containerRef}>
        {/* Desktop menu */}
        <ul className="flex md:flex-row flex-col text-white justify-around list-none h-16 items-center">
          {links.map(({ url, name }, index) => (
            <MenuItem
              selected={selected === index}
              onClick={() => setSelected(index)}
              key={name}
            >
              <NavLink href={url} passHref>
                <a
                  className={
                    router.pathname === url ? "text-yellow-100" : "text-white"
                  }
                >
                  {name}
                </a>
              </NavLink>
            </MenuItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

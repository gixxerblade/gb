import { useRef, useState } from "react";
import { NavLink } from "remix";
import { AnimateSharedLayout, motion, useCycle } from "framer-motion";
import { MobileMenuToggle } from './HamburgerMenu';
import { MenuItem } from './MenuItem';
import { links } from '../../constants/links';
import { useResize } from "~/hooks/useResize";
import { useDimensions } from "~/hooks/useDimensions";
import { MobileNav } from "./MobileNav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Navigation = () => {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  return (
    <header className="z-1 w-screen sticky top-0 bg-navy hidden md:block">
      <nav className="bg-navy h-16" ref={containerRef}>
        {/* Desktop menu */}
        <ul className="flex md:flex-row flex-col text-white justify-around list-none h-16 items-center">
          <AnimateSharedLayout>
            {links.map(({ url, name }, index) => (
              <MenuItem
                selected={selected === index}
                onClick={() => setSelected(index)}
                key={name}
              >
                <NavLink
                  className={
                    ({ isActive }) => isActive
                      ? 'text-yellow-100' : 'text-white'}
                  to={url}
                >
                  {name}
                </NavLink>
              </MenuItem>
            ))}
          </AnimateSharedLayout>
        </ul>
      </nav>
    </header>
  )
};

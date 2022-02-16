import { useState } from "react";
import { NavLink } from "remix";
import { AnimateSharedLayout } from "framer-motion";
import { MenuItem, MenuButton } from './components'
import { links } from './constants/links'

export const Nav = () => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky z-1 w-screen top-0 bg-navy">
      <nav className="bg-navy h-16">
        <div className="md:hidden">
          <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            strokeWidth="4"
            color="white"
            lineProps={{ strokeLinecap: "round" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            width="20"
            height="20"
            style={{ marginLeft: '2rem' }}
          />
        </div>
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

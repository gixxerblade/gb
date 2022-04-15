import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../../constants/links";
import { MobileMenuItem } from "./MobileMenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNav = () => (
  <motion.ul
    className="absolute z-99 p-6 t-[100px] w-[230px]"
    variants={variants}
  >
    {links.map((item) => (
      <MobileMenuItem id={item.id} key={item.id}>
        <Link href={item.url}>{item.name}</Link>
      </MobileMenuItem>
    ))}
  </motion.ul>
);

import { motion, useCycle } from "framer-motion";
import { MutableRefObject, Ref, useRef } from "react";
import { useDimensions } from "~/hooks/useDimensions";
import { HamburgerMenu } from "./HamburgerMenu";
import { MobileNav } from "./MobileNav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MobileNavigationParent = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { height } = useDimensions(containerRef);

  return (
    <header className="md:hidden w-screen z-99 h-10 top-10 bg-navy">
      <motion.nav
        className="w-[300px]"
        animate={isOpen ? 'open' : 'closed'}
        custom={height / 2}
        ref={containerRef}
      >
        <motion.div className="absolute top-0 left-0 bottom-0 w-full bg-white" variants={sidebar} />
        <MobileNav />
        <HamburgerMenu toggle={() => toggleOpen()} isOpen={isOpen} />
      </motion.nav>
    </header>
  )

}
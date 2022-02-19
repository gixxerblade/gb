import { motion } from "framer-motion";

type MobileMenuItems = {
  children: React.ReactNode,
  id: number,
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ['deep-pink', 'magenta', 'electric-violet'];

export const MobileMenuItem = ({ id, children }: MobileMenuItems) => (
  <motion.li
    className="text-navy list-none mb-5 flex items-center cursor-pointer"
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={`border-2 border-black w-10 h-10 rounded-full m-5`} />
    <div className={`border-2 border-${colors[id]} flex rounded h-5 w-48 flex-1`}>
      {children}
    </div>
  </motion.li>
);

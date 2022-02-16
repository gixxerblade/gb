import { motion } from "framer-motion";

type MenuItems = {
  children: React.ReactNode,
  selected: boolean,
  onClick: () => void,
}

export const MenuItem = ({ children, selected, onClick }: MenuItems) => (
  <motion.div
    onClick={onClick}
    animate={{
      opacity: selected ? 1 : 0.5,
      borderBottom: selected ? '1px  rgb(254 249 195) solid' : '0px',
    }}
    whileHover={{
      opacity: !selected ? 1 : 1,
      scale: !selected ? 1.01 : 1,
      transition: { duration: 0.4 }
    }}
    // onHoverStart={e => {console.log(e)}}
    // onHoverEnd={e => {}}
    transition={{ duration: 0.3 }}
  >
    {children}
    {selected && (
      <motion.div
        style={{ textDecoration: 'underline'}}
        className="underline"
        layoutId="underline"
      />
    )}
  </motion.div>
)

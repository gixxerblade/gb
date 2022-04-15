import { motion, SVGMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ToggleProps extends SVGMotionProps<ReactNode> {
  toggle: () => void,
  isOpen: boolean,
}

interface PathProps extends JSX.IntrinsicAttributes, SVGMotionProps<SVGPathElement>, React.RefAttributes<SVGPathElement> { }

const Path = (props: PathProps) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  )
};

export const HamburgerMenu = ({ toggle, isOpen }: ToggleProps) => (
    <button
      onClick={toggle}
      className="outline-none border-0 cursor-pointer absolute top-[15px] left-[29px] w-12 h-12 rounded-full"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={isOpen ? '#1e2243' : '#fff'}
          transition={{ duration: 0.2 }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          stroke={isOpen ? '#1e2243' : '#fff'}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          stroke={isOpen ? '#1e2243' : '#fff'}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </button>
  );
import { useState, useEffect, MutableRefObject, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "~/constants/images";
import { wrap } from "@popmotion/popcorn";
import { useResize } from "~/hooks/useResize";

export const SlideShow = () => {
  const { width, ref } = useResize();
  ;
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? width : -width,
        opacity: 1
      };
    },
    center: {
      zIndex: 0,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 1,
        x: direction < 0 ? width : -width,
        opacity: 0
      };
    }
  };
  
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const [seconds, setSeconds] = useState(0);

  const imageIndex = wrap(0, images.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  }

    useEffect(() => {
      const interval = setInterval(() => {
        // setSeconds(seconds => seconds + 1);
        paginate(1);
      }, 3000);
      return () => clearInterval(interval);
    }, [paginate]);

    return (
      <div ref={ref} className="relative flex justify-center items-center">
        <AnimatePresence initial={true} custom={direction}>
          <motion.img
            className="w-fit"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 1 },
              opacity: { duration: 2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
  
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
    );
  
  }
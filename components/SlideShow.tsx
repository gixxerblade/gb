import { createRef, useState } from "react";
import { IMAGES } from "../constants/images";

export const SlideShow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = IMAGES.reduce((acc: Record<number, any>, _val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (idx: number) => {
    setCurrentImage(idx);
    refs[idx].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  const totalImages = IMAGES.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft: boolean = false) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );
  /**
   * .carousel {
  display: inline-flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  return (
    <div className="w-screen flex justify-center">
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-full">
          <div className="inline-flex overflow-x-hidden snap-x">
            {sliderControl(true)}
            {IMAGES.map(
              (img: { url: string; placeholder: string }, i: number) => (
                <div
                  className="w-full flex-shrink-0"
                  key={img.url}
                  ref={refs[i]}
                >
                  <img
                    src={img.url}
                    className="w-full object-contain"
                    alt={img.placeholder}
                  />
                </div>
              )
            )}
            {sliderControl()}
          </div>
        </div>
      </div>
    </div>
  );
};

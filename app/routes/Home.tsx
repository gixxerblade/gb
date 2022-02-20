import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useLoaderData } from 'remix';
import { Guerrilla } from "~/components";
import { SlideShow } from '~/components/SlideShow';
import { IMAGES } from '~/constants/images';
import { useResize } from "~/hooks/useResize";

export async function loader() {
  return await fetch('../constants/images')
}


const Home = () => {
  // const ref = useRef<HTMLDivElement>(null)
  const { ref, width, height } = useResize()
  const images = useLoaderData();
  console.log(loader)

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div ref={ref} className="flex flex-col items-center md:w-1/2 h-full">
          <div className="mx-3 my-3 overflow-hidden">
            <Guerrilla />
          </div>
          <div className="w-screen relative flex justify-center items-center">
            <SlideShow images={IMAGES} />
          </div>
          <p className="text-white text-center my-2 sm:mx-1">
            <motion.span

            >
              Guerrilla Bicycle Co.
            </motion.span>
            &nbsp;is an independent bicycle shop established to serve the needs of the single speed cyclist. At Guerrilla Bicycle Co. we celebrate the freedom and culture of the single cog in both its fixed and free form.
          </p>
          <p className="text-white text-center my-2 sm:mx-1">
            Our retail store, located in Jacksonville, NC, is the first urban bicycle shop in the region and features over 50 unique art installations by local artists. We carry a full selection of BMX, Fixed Gear, and City Bikes for purchase in-store. We also offer a fantastic selection of certified pre-owned and refurbished bicycles available in store.
          </p>
          <p className="text-white text-center my-2 sm:mx-1">
            At Guerrilla Bicycle Co. we are passionate supporters of the cycling community and host frequent events in store.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home
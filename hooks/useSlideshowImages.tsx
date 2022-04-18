import { createRef, RefObject, useEffect, useState } from "react";
import {
  CloudinaryImages,
  loadSlideshowImages,
} from "../lib/loadSlideshowImages";

const useSlideshowImages = () => {
  const [images, setImages] = useState<CloudinaryImages["resources"]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [refs, setRefs] = useState<Record<number, RefObject<HTMLDivElement>>>(
    {}
  );

  useEffect(() => {
    setLoading(true);
    try {
      loadSlideshowImages().then((images) => {
        setImages(images);
        setRefs(
          images.reduce(
            (acc: Record<number, RefObject<HTMLDivElement>>, _val, i) => {
              acc[i] = createRef<HTMLDivElement>();
              return acc;
            },
            {}
          )
        );
      });
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setImages, setError]);

  return {
    images,
    loading,
    error,
    refs,
  };
};

export default useSlideshowImages;

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroData from "./hero";
import bookIcon from "../../../assets/images/home/hero/bookIcon.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  //   const scrollPrev = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollPrev();
  //   }, [emblaApi]);

  //   const scrollNext = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollNext();
  //   }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla_viewport" ref={emblaRef}>
        <div className="embla__container">
          {heroData.map((item) => (
            <div
              className=" bg-cover bg-center  md:w-full flex items-center  h-[80vh] embla__slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${item.image})`,
              }}
            >
              {item?.id === 1 ? (
                <div className="relative container mx-auto flex justify-center text-center px-4">
                  <div className="max-w-2xl text-left">
                    {/* Heading */}
                    <h1 className="text-white text-center text-4xl md:text-5xl font-bold leading-tight">
                      We pla
                      <span className="bg-[#FB6B47] text-white py-2">
                        y and lea
                      </span>
                      rn
                      <br />
                      <span className="text-[#EED060] font-extrabold  whitespace-nowrap">
                        Who said education was boring?
                      </span>
                    </h1>

                    {/* Buttons */}
                    <div className=" mt-6 flex justify-center flex-wrap gap-4">
                      <Link to="/about">
                        <button className="bg-white cursor-pointer text-gray-800 font-semibold py-2 px-4 rounded-md shadow">
                          More About Us
                        </button>
                      </Link>
                      <button className="bg-lime-500 text-white font-semibold py-2 px-4 rounded-md shadow">
                        Our Teachers
                      </button>
                    </div>
                  </div>

                  {/* Optional: Icon (bottom-right corner) */}
                  <div className="absolute right-28 md:top-8/12 hidden md:flex">
                    <img src={bookIcon} alt="Book Icon" className="w-20 h-20" />
                  </div>
                </div>
              ) : (
                <div>Content for other IDs</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button> */}
    </div>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type CarouselProps = {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
  height: number;
};

const Carousel = (props: CarouselProps) => {
  const {
    autoSlide = false,
    autoSlideInterval = 3000,
    slides,
    height = 150,
  } = props;
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative" style={{ height: `${height}px` }}>
      <div
        className="flex transition-transform ease-out duration-500 slides"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides?.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 carousel-nav">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden transition-all"
        >
          <BiChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden transition-all"
        >
          <BiChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import { useState, useEffect, useCallback } from "react";

const HorizontalImageSlider = () => {
  const images = [
    "/assets/conference.jpg",
    "/assets/team.jpg",
    "/assets/award.jpg",
    "/assets/group.jpg",
    "/assets/conf.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="w-full flex-col md:flex-row flex gap-16 justify-center items-center p-4 md:p-8 bg-gradient-to-b from-[#faf7ef] to-[#f0ead6] jetbrains-mono">
      <div className="relative max-h-[80vh] w-full overflow-hidden  m-0 p-0 font-sans border-[0.5px] rounded-xl">
        <div
          className="flex flex-nowrap w-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full flex-none">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover select-none"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#93E9BE]/20 via-transparent to-[#F0EAD6]/20 pointer-events-none" />

        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-10 top-1/2 z-50 -translate-y-1/2 p-5 text-white transition-all hover:scale-110 active:scale-90">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-10 top-1/2 z-50 -translate-y-1/2 p-5 text-white transition-all hover:scale-110 active:scale-90">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-6 w-full z-50 flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative flex items-center justify-center p-2 bg-transparent rounded-full hover:scale-110 transition-transform">
                <div
                  className={`transition-all duration-700 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-1.5 bg-[#fffcfc]"
                      : "w-2 h-2 bg-[#ffffff] hover:bg-[#000000]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="info hidden md:flex flex-col justify-center items-start">
        <div className="w-full flex items-center mb-5 mx-5">
          <img src="/assets/cslogo.png" alt="" className="w-30"/>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-[#2C4A41]">Computer Science Society</h2>
        <p className="text-lg text-[#2C4A41]/70 max-w-md">
          Department of Computer Science,
        </p>
        <p className="text-lg text-[#2C4A41]/70 max-w-md">
          Faculty of Science,
        </p>
        <p className="text-lg text-[#2C4A41]/70 max-w-md">
          Aligarh Muslim University, Aligarh
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalImageSlider;

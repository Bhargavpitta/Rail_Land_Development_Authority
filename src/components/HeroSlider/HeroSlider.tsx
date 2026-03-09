import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Import images from assets */

import one from "@/assets/one.jfif";
import two from "@/assets/two.jpg";
import three from "@/assets/three.jpg";
import four from "@/assets/four.jpg";
import five from "@/assets/five.jpg";
import seven from "@/assets/seven.jpg";
import eight from "@/assets/eight.jpg";
import nine from "@/assets/nine.jpg";
import ten from "@/assets/ten.jpg";
import eleven from "@/assets/eleven.jpg";

const HeroSlider = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const slides = [
    { image: one, link: "/projects/station/status", text: "Station Redevelopment" },
    { image: two, link: "/projects/commercial/status", text: "Commercial Land Development" },
    { image: three, link: "/projects/mfc/status", text: "Passenger Amenities" },
    { image: four, link: "/projects/colony/status", text: "Railway Colony Development" },
    { image: five, link: "/projects/consultant", text: "Empanelled Consultants" },
    { image: seven, link: "/projects/opaas", text: "OPAAS System" },
    { image: eight, link: "/projects/station/status", text: "Modern Station Projects" },
    { image: nine, link: "/projects/commercial/status", text: "Railway Land Monetisation" },
    { image: ten, link: "/projects/mfc/status", text: "Passenger Facilities Development" },
    { image: eleven, link: "/projects/colony/status", text: "Urban Railway Infrastructure" },
  ];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[320px] md:h-[450px] lg:h-[520px] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Clickable image */}
          <img
  src={slide.image}
  alt={slide.text}
  onClick={() => navigate(slide.link)}
  className="w-full h-full object-contain cursor-pointer"
/>

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* bottom caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-blue-900/90 py-3">
            <h3 className="text-white text-lg md:text-xl font-bold text-center">
              {slide.text}
            </h3>
          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-blue-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
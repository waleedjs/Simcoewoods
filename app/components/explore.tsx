"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const images = [
    { src: "/images/hero2.jpg", title: "Dining" },
    { src: "/images/hero2.jpg", title: "Friday Harbour" },
    { src: "/images/hero2.jpg", title: "Shopping" },
    { src: "/images/hero2.jpg", title: "Trails & Nature" },
    { src: "/images/hero2.jpg", title: "Beaches" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerPadding: "0px" },
      },
    ],
  };

  const openModal = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-white pt-8 pb-14 px-4 md:pb-16 md:pt-10 rounded-lg mx-auto">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Innisfil</h3>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-3">
            <div
              className="relative cursor-pointer overflow-hidden rounded-md group"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={350}
                className="rounded-md w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-white/80 px-4 py-2 rounded shadow-md">
                <p className="text-gray-800 font-semibold">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
              aria-label="Close"
            >
              ✕
            </button>
            <Image
              src={modalImage}
              alt="Modal Image"
              width={1000}
              height={700}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

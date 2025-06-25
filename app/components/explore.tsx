'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
    aria-label="Previous Slide"
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
    aria-label="Next Slide"
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const ImageSlider = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const images = [
    { src: '/images/friday-harbour.webp', title: 'Friday Harbour' },
    { src: '/images/shopping.webp', title: 'Shopping' },
    { src: '/images/food-truck.webp', title: 'Food Truck' },
    { src: '/images/ideal-lab.webp', title: 'IdealLab and Library' },
    { src: '/images/beach-park.webp', title: 'Innisfil Beach Park' },
    { src: '/images/beach-park2.webp', title: 'Innisfil Beach Park' },
    { src: '/images/alcona-glen.webp', title: 'Alcona Glen Elementary School' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '40px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: '20px' },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerPadding: '0px' },
      },
    ],
    customPaging: () => (
      <div className="w-4 h-2 bg-gray-400 rounded-full mt-4 transition-all duration-300 slick-active:w-[20px] slick-active:bg-teal-600"></div>
    ),
    dotsClass: 'slick-dots flex justify-center space-x-1 mt-4',
  };

  const openModal = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-white pt-8 pb-14 px-4 md:pb-16 md:pt-10 rounded-lg mx-auto">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Innisfil</h3>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-3">
            <div
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={350}
                className="rounded-xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
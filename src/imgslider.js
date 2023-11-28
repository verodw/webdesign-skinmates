import React, { useEffect, useState, useRef } from 'react';

const ImageSlider = ({ slides, parentWidth }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      // Geser ke gambar pertama tanpa animasi
      slider.style.transition = 'none';
      setCurrentIndex(0);
      slider.style.transform = `translateX(0)`;
      // Set timeout untuk memberi waktu agar perubahan di atas berlaku sebelum kembali ke animasi
      setTimeout(() => {
        slider.style.transition = ''; // Kembalikan animasi
      }, 0);
    };

    slider.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          transition: 'transform 0.5s linear',
          width: parentWidth * (slides.length + 1), // Tambah satu slide untuk seamless looping
          transform: `translateX(${-currentIndex * parentWidth}px)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              width: parentWidth,
            }}
          >
            <img
              src={slide.url}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              draggable="false" // Tambahkan atribut draggable untuk mencegah pergeseran manual oleh pengguna
            />
          </div>
        ))}
        {/* Duplicate the first slides for seamless looping */}
        {slides.map((slide, index) => (
          <div
            key={index + slides.length}
            style={{
              flex: '0 0 auto',
              width: parentWidth,
            }}
          >
            <img
              src={slide.url}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              draggable="false" // Tambahkan atribut draggable untuk mencegah pergeseran manual oleh pengguna
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

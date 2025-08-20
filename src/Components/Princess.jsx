import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageData from '../data/Princess.json';

const IMAGES_PER_PAGE = 5;
const SLIDE_INTERVAL_MS = 5000;
const HEART_ANIMATION_MS = 1200;

export default function Princess() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [showHeart, setShowHeart] = useState(false);
  const navigate = useNavigate();

  const totalPages = Math.ceil(imageData.length / IMAGES_PER_PAGE);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);       // Start fading out
      setShowHeart(true);   // Show the heart animation

      setTimeout(() => {
        if (currentPage < totalPages - 1) {
          setCurrentPage((prev) => prev + 1);
        } else {
          navigate('/');
        }
        setFade(true);       // Fade new images in
        setShowHeart(false); // Hide heart
      }, HEART_ANIMATION_MS); // Wait for heart animation to finish
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [currentPage, navigate, totalPages]);

  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = imageData.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  if (currentImages.length < 5) return null;

  const [bigImage, ...smallImages] = currentImages;

  return (
    <div className=" pt-18 relative min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 flex flex-col md:flex-row transition duration-500 ease-in-out overflow-hidden">
      
      {/* 💖 Heart animation during transition */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-pink-500 text-7xl animate-love-grow">💖</div>
        </div>
      )}

      {/* Image layout with fade animation */}
      <div
        className={`flex flex-col md:flex-row w-full transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Big left image */}
        <div className="md:w-1/2 w-full h-[40vh] md:h-screen p-2">
          <img
            src={bigImage.src}
            alt={bigImage.alt}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Four small right images */}
        <div className="md:w-3/4 w-full grid grid-cols-2 grid-rows-2 gap-1 h-[50vh] md:h-screen p-2">
          {smallImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover p-2 rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import IVFvideo from '../assets/videos/IVFvideo.mp4';

const VideoOfCentre = () => {
  const videoRef = useRef(null); // Proper use of useRef for video element
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  };

  useEffect(() => {
    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the video is in the viewport
    });

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play(); // Auto-play when in view
      } else {
        videoRef.current.pause(); // Pause when not in view
      }
    }
  }, [isInView]);

  return (
    <div className="flex justify-center my-10">
      <h3 className='px-10 hidden xl:block text-7xl font-bold text-white'>Arpit Test Tube Baby Centre</h3>
      <video
        ref={videoRef} // Correct usage of useRef
        className="w-full rounded-xl max-w-3xl"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={IVFvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className='px-10 hidden xl:block text-7xl font-bold text-white'>Arpit Test Tube Baby Centre</h3>
    </div>
  );
};

export default VideoOfCentre;

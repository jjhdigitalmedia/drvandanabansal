import React, { useEffect, useState } from "react";

const PageLoader = ({ logoSrc }) => {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    let minimumTimer;
    let maximumTimer;
    let fadeTimer;

    let pageLoaded = false;
    let minimumTimeCompleted = false;

    // --------------------------------
    // Finish Loading
    // --------------------------------
    const finishLoading = () => {
      if (!minimumTimeCompleted || !pageLoaded) {
        return;
      }

      setHide(true);

      fadeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // --------------------------------
    // Website Fully Loaded
    // --------------------------------
    const handleLoad = () => {
      pageLoaded = true;
      finishLoading();
    };

    // --------------------------------
    // Minimum Loading Time = 0.7 sec
    // --------------------------------
    minimumTimer = setTimeout(() => {
      minimumTimeCompleted = true;
      finishLoading();
    }, 300);

    // --------------------------------
    // Maximum Loading Time = 90 sec
    // --------------------------------
    maximumTimer = setTimeout(() => {
      if (!pageLoaded) {
        setConnectionError(true);
      }
    }, 90000);

    // --------------------------------
    // Check Current Page Status
    // --------------------------------
    if (document.readyState === "complete") {
      pageLoaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // If page is already loaded
    if (pageLoaded) {
      finishLoading();
    }

    // --------------------------------
    // Cleanup
    // --------------------------------
    return () => {
      clearTimeout(minimumTimer);
      clearTimeout(maximumTimer);
      clearTimeout(fadeTimer);

      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // --------------------------------
  // Completely Remove Loader
  // --------------------------------
  if (!loading) {
    return null;
  }

  // ==========================================
  // CONNECTION ERROR SCREEN
  // ==========================================
  if (connectionError) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#f1f1f1] px-5">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-10">

          {/* Connection Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-800"
            >
              <path d="M12 20h.01" />
              <path d="M2 8.82a15 15 0 0 1 20 0" />
              <path d="M5 12.86a10 10 0 0 1 14 0" />
              <path d="M8.5 16.35a5 5 0 0 1 7 0" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-2xl font-semibold text-gray-900">
            Please check your connection
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-500">
            The website is taking longer than expected to load.
            Please check your internet connection and try again.
          </p>

          {/* Try Again */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-pink-800 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-pink-900 hover:shadow-lg"
          >
            Try Again
          </button>

        </div>
      </div>
    );
  }

  // ==========================================
  // LOADING SCREEN
  // ==========================================
  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#f1f1f1] transition-opacity duration-500 ${
        hide
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* ================================= */}
        {/* Animated Logo */}
        {/* ================================= */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          {/* Outer Circle */}
          <div className="absolute inset-0 rounded-full border border-pink-800/15" />

          {/* Rotating Circle */}
          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-r-pink-800 border-t-pink-800" />

          {/* Logo Container */}
          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_8px_30px_rgba(157,23,77,0.12)]">

            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Dr. Vandana Bansal"
                className="h-14 w-auto object-contain"
              />
            ) : (
              <span className="font-serif text-xl font-bold text-pink-800">
                VB
              </span>
            )}

          </div>
        </div>

        {/* ================================= */}
        {/* Doctor Name */}
        {/* ================================= */}
        <h1 className="mt-5 font-serif text-lg font-semibold tracking-wide text-pink-800">
          Dr. Vandana Bansal
        </h1>

        {/* ================================= */}
        {/* Loading Dots */}
        {/* ================================= */}
        <div className="mt-3 flex items-center gap-1.5">

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-800" />

          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-800"
            style={{
              animationDelay: "150ms",
            }}
          />

          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-800"
            style={{
              animationDelay: "300ms",
            }}
          />

        </div>

      </div>
    </div>
  );
};

export default PageLoader;
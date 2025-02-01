import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-rose-400 text-white p-3 rounded-full shadow-xl hover:bg-rose-800 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Arrow;

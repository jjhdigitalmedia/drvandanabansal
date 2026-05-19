import { useRef, useEffect, useState } from "react";

function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-10 px-4">
      <div className="bg-pink rounded-2xl py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          
          <Counter
            label="Successful Pregnancies"
            value={40000}
            visible={visible}
          />

          <Counter
            label="Years of Dedication"
            value={38}
            visible={visible}
          />

          <Counter
            label="High Risk Cases Managed"
            value={5000}
            visible={visible}
          />

          <Counter
            label="Successful IVF Pregnancies"
            value={40000}
            visible={visible}
          />

        </div>
      </div>
    </section>
  );
}

export default Stats;

function Counter({ label, value, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div className="w-full md:w-1/4 text-center py-6 md:border-b md:border-b-0 md:border-r border-gray-300 last:border-b-0 md:last:border-r-0">
      
      <h4 className="text-3xl md:text-4xl text-pink-600 font-bold font-serif">
        {count}+
      </h4>

      <p className="text-sm md:text-base mt-2 text-gray-700 px-2">
        {label}
      </p>

    </div>
  );
}
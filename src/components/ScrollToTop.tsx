// components/ScrollToTop.tsx

'use client'

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
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
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 9999 }} // إضافة z-index لضمان ظهوره فوق جميع العناصر
    >
      ↑
    </button>
  );
}

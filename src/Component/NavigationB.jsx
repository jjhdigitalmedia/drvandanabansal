import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  X,
  Menu,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { treatmentsData } from "../Pages/Treatements.jsx";
import DrVandanaLogo from "../assets/DrVandanaLogo.png";

const Navbar = ({ logoSrc }) => {
  const location = useLocation();

  const [desktopSpecialityOpen, setDesktopSpecialityOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(
    treatmentsData?.[0]?.key || null
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile Specialities main accordion
  const [mobileSpecialitiesOpen, setMobileSpecialitiesOpen] = useState(false);

  // Mobile individual category accordion
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  // =========================================================
  // SCROLL EFFECT
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // CLOSE MENUS ON ROUTE CHANGE
  // =========================================================
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSpecialitiesOpen(false);
    setMobileOpenCategory(null);
    setDesktopSpecialityOpen(false);
  }, [location.pathname]);

  // =========================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =========================================================
  // ESC KEY
  // =========================================================
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDesktopSpecialityOpen(false);
        setMobileMenuOpen(false);
        setMobileSpecialitiesOpen(false);
        setMobileOpenCategory(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =========================================================
  // SELECTED DESKTOP CATEGORY
  // =========================================================
  const selectedCategory = treatmentsData?.find(
    (category) => category.key === activeCategory
  );

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSpecialitiesOpen(false);
    setMobileOpenCategory(null);
  };

  // =========================================================
  // MOBILE SPECIALITIES TOGGLE
  // =========================================================
  const toggleMobileSpecialities = () => {
    setMobileSpecialitiesOpen((prev) => !prev);

    // If closing Specialities, also close category
    if (mobileSpecialitiesOpen) {
      setMobileOpenCategory(null);
    }
  };

  // =========================================================
  // MOBILE CATEGORY TOGGLE
  // =========================================================
  const toggleMobileCategory = (key) => {
    setMobileOpenCategory((prev) => (prev === key ? null : key));
  };

  // =========================================================
  // COMMON DESKTOP NAV LINK CLASS
  // =========================================================
  const desktopLinkClass = (active) =>
    `relative flex h-full items-center text-[14px] font-medium transition-colors duration-200 ${
      active
        ? "text-pink-800"
        : "text-gray-900 hover:text-pink-800"
    }`;

  return (
    <>
      {/* =========================================================
          TOP CONTACT BAR
      ========================================================= */}
      <div
        className={`hidden lg:block bg-pink-800 text-white transition-all duration-300 ${
          scrolled
            ? "h-0 overflow-hidden opacity-0"
            : "h-[41px] opacity-100"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-6 xl:px-10">
          <div className="flex items-center gap-5 text-[13px] font-medium">
            <a
              href="tel:+916390103002"
              className="transition-opacity hover:opacity-75"
            >
              +91 6390103002
            </a>

            <a
              href="tel:+916390103004"
              className="transition-opacity hover:opacity-75"
            >
              +91 6390103004
            </a>

            <a
              href="tel:+919151037784"
              className="transition-opacity hover:opacity-75"
            >
              +91 9151037784
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[13px]">
            <MapPin size={14} strokeWidth={2} />
            <span>
              Jeevan Jyoti Hospital, Prayagraj - 211003
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <header
        className={`sticky top-0 z-[100] w-full border-b border-gray-100 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-[2000px] items-center justify-between px- sm:px-8 lg:px-12 xl:px-16">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="relative z-[130] flex shrink-0 items-center"
          >
             <img
                src={DrVandanaLogo}
                alt="Dr. Vandana Bansal"
                className="h-[80px] w-auto object-contain"
              />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden h-full items-center gap-7 lg:flex xl:gap-8">

            {/* HOME */}
            <Link
              to="/"
              className={desktopLinkClass(location.pathname === "/")}
            >
              Home

              {location.pathname === "/" && (
                <span className="absolute bottom-[19px] left-0 h-[2px] w-full bg-pink-800" />
              )}
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className={desktopLinkClass(
                location.pathname.startsWith("/about")
              )}
            >
              About Dr. Vandana

              {location.pathname.startsWith("/about") && (
                <span className="absolute bottom-[19px] left-0 h-[2px] w-full bg-pink-800" />
              )}
            </Link>

            {/* =================================================
                SPECIALITIES
            ================================================= */}
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => {
                setDesktopSpecialityOpen(true);

                if (!activeCategory && treatmentsData?.length) {
                  setActiveCategory(treatmentsData[0].key);
                }
              }}
              onMouseLeave={() => {
                setDesktopSpecialityOpen(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopSpecialityOpen}
                className={`group flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200 ${
                  desktopSpecialityOpen
                    ? "text-pink-800"
                    : "text-gray-900 hover:text-pink-800"
                }`}
              >
                <span>Specialities</span>

                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className={`transition-transform duration-300 ${
                    desktopSpecialityOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* =================================================
                  DESKTOP MEGA MENU
              ================================================= */}
              <div
                className={`absolute right-1/2 top-[88px] z-[200] w-[min(1120px,calc(100vw-40px))] translate-x-1/2 transform-gpu transition-all duration-300 ${
                  desktopSpecialityOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-b-2xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                  {/* TOP ACCENT */}
                  <div className="h-1 w-full bg-pink-800" />

                  <div className="grid grid-cols-[330px_1fr]">

                    {/* =================================================
                        CATEGORY COLUMN
                    ================================================= */}
                    <div className="border-r border-gray-100 bg-[#fafafa] p-5">

                      <div className="space-y-1">
                        {treatmentsData?.map((category) => {
                          const isActive =
                            activeCategory === category.key;

                          return (
                            <button
                              key={category.key}
                              type="button"
                              onMouseEnter={() =>
                                setActiveCategory(category.key)
                              }
                              onFocus={() =>
                                setActiveCategory(category.key)
                              }
                              className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                                isActive
                                  ? "bg-pink-800 text-white shadow-sm"
                                  : "text-gray-700 hover:bg-pink-50 hover:text-pink-800"
                              }`}
                            >
                              <span className="pr-3 text-[13px] font-medium leading-snug">
                                {category.category}
                              </span>

                              <ChevronRight
                                size={16}
                                className={`shrink-0 transition-transform duration-200 ${
                                  isActive
                                    ? "translate-x-0.5 text-white"
                                    : "text-gray-400 group-hover:translate-x-0.5 group-hover:text-pink-800"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* =================================================
                        TREATMENTS COLUMN
                    ================================================= */}
                    <div className="min-h-[455px] bg-white p-7">
                      {selectedCategory && (
                        <div
                          key={selectedCategory.key}
                          className="animate-[fadeSlide_.25s_ease-out]"
                        >
                          {/* HEADING */}
                          <div className="mb-6 flex items-end justify-between border-b border-gray-100 pb-4">
                            <div>
                              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-800">
                                Treatments
                              </p>

                              <h3 className="text-xl font-semibold text-gray-900">
                                {selectedCategory.category}
                              </h3>
                            </div>
                          </div>

                          {/* TREATMENT GRID */}
                          <div className="grid grid-cols-2 gap-3">
                            {selectedCategory.treatments?.map(
                              (treatment, index) => (
                                <Link
                                  key={treatment.title}
                                  to={`/${treatment.link}`}
                                  className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-100 hover:bg-gray-50/50 hover:shadow-sm"
                                  style={{
                                    animationDelay: `${index * 25}ms`,
                                  }}
                                >
                                  <div className="min-w-0 pr-3">
                                    <h4 className="truncate text-[13px] font-semibold text-gray-800 transition-colors duration-200 group-hover:text-pink-800">
                                      {treatment.title}
                                    </h4>
                                  </div>

                                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-200 group-hover:bg-pink-800 group-hover:text-white">
                                    <ArrowUpRight size={14} />
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <Link
              to="/achievements"
              className={desktopLinkClass(
                location.pathname.startsWith("/achievements")
              )}
            >
              Achievements
            </Link>

            {/* IN NEWS */}
            <Link
              to="/in-news"
              className={desktopLinkClass(
                location.pathname.startsWith("/in-news")
              )}
            >
              In News
            </Link>

            {/* GALLERY */}
            <Link
              to="/gallery"
              className={desktopLinkClass(
                location.pathname.startsWith("/gallery")
              )}
            >
              Gallery
            </Link>

            {/* PATIENT GUIDE */}
            <Link
              to="/patients-education"
              className={desktopLinkClass(
                location.pathname.startsWith("/patients-education")
              )}
            >
              Patients Guide
            </Link>
          </nav>

          {/* =====================================================
              DESKTOP APPOINTMENT
          ===================================================== */}
          <Link
            to="/book-appointment"
            className="hidden shrink-0 items-center gap-2 rounded-xl bg-pink-800 px-5 py-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-900 hover:shadow-lg lg:flex"
          >
            <CalendarDays size={15} />
            <span>Make an Appointment</span>
          </Link>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-[130] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-gray-200 text-pink-800 transition-all duration-300 lg:hidden"
          >
            <span className="relative flex h-6 w-6 items-center justify-center">
              {/* HAMBURGER */}
              <Menu
                size={25}
                strokeWidth={1.2}
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              {/* CROSS */}
              <X
                size={25}
                strokeWidth={1.8}
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
          Navbar ke neeche se start hoga.
          Navbar visible rahega.
      ========================================================= */}
      <div
        className={`fixed left-0 right-0 top-[88px] z-[90] lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
        style={{
          height: "calc(100dvh - 88px)",
        }}
      >
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        {/* MENU PANEL */}
        <div
          className={`relative h-full w-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-400 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {/* SCROLLABLE CONTENT */}
          <div className="h-full overflow-y-auto overscroll-contain px-5 pb-10 pt-5 sm:px-8">
            <div className="mx-auto max-w-xl">

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}
              <nav className="space-y-1.5">

                {/* HOME */}
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname === "/"
                      ? "bg-pink-50 text-pink-800"
                      : "text-gray-800 hover:bg-pink-50 hover:text-pink-800"
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight size={18} />
                </Link>

                {/* ABOUT */}
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/about")
                      ? "bg-gray-50 text-pink-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-pink-800"
                  }`}
                >
                  <span>About Dr. Vandana</span>
                  <ChevronRight size={18} />
                </Link>

                {/* =================================================
                    MOBILE SPECIALITIES
                ================================================= */}
                <div className="overflow-hidden rounded-xl border border-gray-100">

                  {/* SPECIALITIES HEADER */}
                  <button
                    type="button"
                    aria-expanded={mobileSpecialitiesOpen}
                    onClick={toggleMobileSpecialities}
                    className={`flex w-full items-center justify-between px-4 py-4 text-left text-base font-medium transition-colors ${
                      mobileSpecialitiesOpen
                        ? "bg-pink-800 text-white"
                        : "text-gray-800 hover:bg-pink-50 hover:text-pink-800"
                    }`}
                  >
                    <span>Specialities</span>

                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        mobileSpecialitiesOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* SPECIALITIES CONTENT */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      mobileSpecialitiesOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-2 bg-gray-50 p-3">

                        {treatmentsData?.map((category) => {
                          const isOpen =
                            mobileOpenCategory === category.key;

                          return (
                            <div
                              key={category.key}
                              className="overflow-hidden rounded-xl border border-gray-100 bg-white"
                            >
                              {/* CATEGORY */}
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() =>
                                  toggleMobileCategory(category.key)
                                }
                                className={`flex w-full items-center justify-between px-4 py-3.5 text-left transition-all duration-200 ${
                                  isOpen
                                    ? "bg-gray-50 text-pink-800"
                                    : "text-gray-700"
                                }`}
                              >
                                <span className="pr-3 text-sm font-semibold">
                                  {category.category}
                                </span>

                                <ChevronDown
                                  size={17}
                                  className={`shrink-0 transition-transform duration-300 ${
                                    isOpen
                                      ? "rotate-180"
                                      : "rotate-0"
                                  }`}
                                />
                              </button>

                              {/* TREATMENTS */}
                              <div
                                className={`grid transition-[grid-template-rows] duration-300 ${
                                  isOpen
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <div className="border-t border-gray-100 bg-gray-50 px-3 py-2">

                                    {category.treatments?.map(
                                      (treatment) => (
                                        <Link
                                          key={treatment.title}
                                          to={`/${treatment.link}`}
                                          onClick={closeMobileMenu}
                                          className="group flex items-center justify-between border-b border-gray-100 px-2 py-3 last:border-0"
                                        >
                                          <span className="pr-3 text-[13px] text-gray-600 transition-colors group-hover:text-pink-800">
                                            {treatment.title}
                                          </span>

                                          <ChevronRight
                                            size={15}
                                            className="shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-pink-800"
                                          />
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACHIEVEMENTS */}
                <Link
                  to="/achievements"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/achievements")
                      ? "bg-gray-50 text-pink-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-pink-800"
                  }`}
                >
                  <span>Achievements</span>
                  <ChevronRight size={18} />
                </Link>

                {/* IN NEWS */}
                <Link
                  to="/in-news"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/news")
                      ? "bg-gray-50 text-pink-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-pink-800"
                  }`}
                >
                  <span>In News</span>
                  <ChevronRight size={18} />
                </Link>

                {/* GALLERY */}
                <Link
                  to="/gallery"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/gallery")
                      ? "bg-gray-50 text-pink-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-pink-800"
                  }`}
                >
                  <span>Gallery</span>
                  <ChevronRight size={18} />
                </Link>

                {/* PATIENT GUIDE */}
                <Link
                  to="/patients-education"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/patients-education")
                      ? "bg-gray-50 text-pink-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-pink-800"
                  }`}
                >
                  <span>Patients Guide</span>
                  <ChevronRight size={18} />
                </Link>

                {/* =================================================
                    APPOINTMENT
                ================================================= */}
                <Link
                  to="/book-appointment"
                  onClick={closeMobileMenu}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-pink-800 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-pink-900"
                >
                  <CalendarDays size={18} />
                  <span>Make an Appointment</span>
                </Link>
              </nav>

              {/* =================================================
                  MOBILE CONTACT
              ================================================= */}
              <div className="mt-8 border-t border-gray-100 pt-6">

                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-800">
                  Contact
                </p>

                <div className="space-y-3">

                  {/* PHONE 1 */}
                  <a
                    href="tel:+916390103002"
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-pink-800">
                      <Phone size={16} />
                    </span>

                    +91 6390103002
                  </a>

                  {/* PHONE 2 */}
                  <a
                    href="tel:+916390103004"
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-pink-800">
                      <Phone size={16} />
                    </span>

                    +91 6390103004
                  </a>
                </div>

                {/* ADDRESS */}
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-pink-800"
                  />

                  <span>
                    Jeevan Jyoti Hospital,
                    <br />
                    Prayagraj - 211003
                  </span>
                </div>
              </div>

              {/* BOTTOM SPACE */}
              <div className="h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Better mobile scrollbar */
        .overflow-y-auto {
          scrollbar-width: thin;
        }
      `}</style>
    </>
  );
};

export default Navbar;

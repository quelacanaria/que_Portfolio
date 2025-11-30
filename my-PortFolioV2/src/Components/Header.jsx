import { useEffect, useState, useRef } from "react";

function Header() {
  const [currentSection, setCurrentSection] = useState("Home");

  // Refs for every section
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          if (scrollY >= ref.current.offsetTop - 200) {
            setCurrentSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="h-[80px] w-full bg-hays-100 shadow-header z-[9999] fixed top-0 left-0">
        <main className="h-full flex"> 
          <section className="w-[100px] flex justify-end items-center">
            <a className="font-bold text-white no-underline text-[1.1rem]">
              QueCode
            </a>
          </section>

          <section className="w-[87%] justify-center items-center hidden md:flex">
            <a
              href="#Home"
              className={`m-[30px] nav__link ${
                currentSection === "Home" ? "text-yellow-300" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#About"
              className={`m-[30px] nav__link ${
                currentSection === "About" ? "text-yellow-300" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#Projects"
              className={`m-[30px] nav__link ${
                currentSection === "Projects" ? "text-yellow-300" : "text-white"
              }`}
            >
              Projects
            </a>
            <a
              href="#Contact"
              className={`m-[30px] nav__link ${
                currentSection === "Contact" ? "text-yellow-300" : "text-white"
              }`}
            >
              Contact Me
            </a>
          </section>
        </main>
      </header>
    </>
  );
}

export default Header;

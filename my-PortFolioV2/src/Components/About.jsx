import { useState, useEffect } from "react";

function About() {
  const [typedText, setTypedText] = useState(""); 
  const text = `Hi! I’m Quekeneth S. Lacanaria, but you can call me Keneth. I’m a Computer Engineering graduate from Bestlink College of the Philippines with a strong passion for web development. For me, coding isn’t just a job it’s a hobby that allows me to be creative and innovative. I enjoy building and designing websites, from moving divs to crafting beautiful layouts and interactive user experiences. I also love solving whether it’s debugging code, improving functionality, or finding smarter ways to bring ideas to life. It gives me great satisfaction when I achieve the design I envision or successfully solve a problem that users might encounter. In addition, I enjoy connecting designs to databases that can input, display, update, and delete information. Learning new tech stacks and technologies always excites me, as it helps me grow and stay up to date in this fast-evolving field. I’m also teachable and highly collaborative, always eager to learn from others and contribute to a team’s success. My goal is to continuously improve my skills and help the company grow through innovation, dedication, and quality work.`;

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText((prev) => prev + text.charAt(i));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 10); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[800px]  bg-green-xx">
      <div className="  h-[90%] mx-auto 2xl:w-[900px] xl:w-[900px] lg:w-[800px] md:w-[700px] sm:w-[95%] xs:w-[95%]">
        <p className="mb-[20px] 2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]">
          <i className="fa-solid fa-clipboard"></i> About
        </p>
        <div className="w-[100%] h-[95%] bg-fink-99 rounded-2xl content-center mx-auto 2xl:h-[95%] xl:h-[95%] lg:h-[95%] md:h-[95%] sm:h-[95%] xs:h-[99%] ">
          <div className="w-[90%] bg-white mx-auto p-4 hover:translate-y-[-10px] duration-300 active:scale-90 2xl:h-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] xs:h-[95%] ">
            <p className="break-all mx-[2px] 2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.2rem] xs:text-[1rem] " >{typedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

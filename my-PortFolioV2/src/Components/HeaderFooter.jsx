import { HashLink } from "react-router-hash-link";

    const scrollWithOffset = (el) => {
    const yOffset = -30;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    };

export default function HeaderFooter(){

    return(
        <>
            <main className="w-full h-[70px] bg-fink-99 fixed bottom-0 right-0 flex justify-center xs:justify-evenly  items-center md:hidden z-999">
              <HashLink smooth to={`/#home`} scroll={scrollWithOffset} className={`m-[20px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.3rem] hover:scale-130 duration-300 active:scale-90`} href=""><i class="fa-solid fa-house"></i></HashLink> 
              <HashLink smooth to={`/#about`} scroll={scrollWithOffset} className="m-[20px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.3rem] hover:scale-130 duration-300 active:scale-90" href=""><i className="fa-solid fa-clipboard"></i></HashLink> 
              <HashLink smooth to='/#projects' scroll={scrollWithOffset} className="m-[20px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.3rem] hover:scale-130 duration-300 active:scale-90" href=""><i className="fa-solid fa-folder-open"></i></HashLink>
              <HashLink smooth to={`/#contact`} scroll={scrollWithOffset} className="m-[20px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.3rem] hover:scale-130 duration-300 active:scale-90" href=""><i className="fa-solid fa-phone"></i></HashLink> 
              <HashLink smooth to={`/#links`} scroll={scrollWithOffset} className="m-[20px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.3rem] hover:scale-130 duration-300 active:scale-90" href=""><i className="fa-solid fa-link"></i></HashLink> 
            </main>
        </>
    )

}
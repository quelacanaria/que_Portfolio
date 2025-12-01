function Header(){ 
  
  return( 
  
      <> 
        <header className="h-[80px] w-full bg-hays-100 shadow-header z-[9999] fixed top-0 left-0"> 
          <main className="h-full flex"> 
            <section className="w-[100px] flex justify-end items-center"> 
              <a className="font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem]" href="">QueCode</a> 
            </section> 
            <section className="2xl: w-[87%] justify-center items-center hidden md:flex"> 
              <a className="m-[30px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90" href="">Home</a> 
              <a className="m-[30px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90" href="">About</a> 
              <a className="m-[30px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90" href="">Projects</a> 
              <a className="m-[30px] font-bold text-white no-underline [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90" href="">Contact Me</a> 
            </section> 
          </main> 
        </header> 
      </> ) 
      } 
      
      export default Header
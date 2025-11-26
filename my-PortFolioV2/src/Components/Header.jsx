function Header(){

    return(
        <>
            <header className="h-[80px] w-full bg-hays-100 shadow-header relative z-9999">
                <main className="h-full flex"> 
                    <section className="w-[100px] flex justify-end">
                        <a href="">QueCode</a>
                    </section>
                    <section>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Projects</a>
                        <a href="">Contact Me</a>
                    </section>
                </main>
            </header>
        </>
    )

}

export default Header
function Forms(){
    return(
        <>
            <div className="w-full h-fit bg-green-xx content-center">
                <div className="w-[80%] min-w-[320px] h-[700px] md:h-[480px] bg-fink-99 mx-auto rounded-2xl content-center">
                    <form className="w-[80%] min-w-[300px] h-[85%] bg-white mx-auto rounded-2xl grid p-[20px] grid grid-cols-6 grid-rows-8 2xl:grid-rows-8 xl:grid-rows-8 lg:grid-rows-8 md:grid-rows-8 sm:grid-rows-11 gap-x-0 md:gap-x-[10px] gap-y-[5px]">
                        <p className="col-span-6 row-span-1 text-center self-center text-[35px] ">Contact Me</p>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Email:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Contact Number:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Message:</label>
                        <textarea className="text-[1.2rem] h-[80px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-2" type="text" />
                        <button className="w-[90%] md:w-[270px] h-[70px] text-[1.2rem] justify-self-center self-center border-2 bg-fink-99 
                        text-white border-transparent shadow-mine hover:bg-white hover:text-fink-99 hover:border-fink-99
                         hover:shadow-fink-99 hover:scale-120 active:scale-90 active:shadow-none duration-300 col-span-6 row-span-2 ">Submit</button>
                    </form>
                </div>
                <div className="w-full h-[500px]">

                </div>
            </div>
        </>
    )
}

export default Forms;
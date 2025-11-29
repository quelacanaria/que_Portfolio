function Forms(){
    return(
        <>
            <div className="w-full h-fit bg-green-xx content-center">
                <div className="w-[80%] min-w-[320px] max-w-[800px] h-[700px] md:h-[480px] bg-fink-99 mx-auto rounded-2xl content-center">
                    <form className="w-[80%] min-w-[300px] h-[85%] bg-white mx-auto rounded-2xl grid p-[20px] grid grid-cols-6 grid-rows-8 2xl:grid-rows-8 xl:grid-rows-8 lg:grid-rows-8 md:grid-rows-8 sm:grid-rows-11 gap-x-0 md:gap-x-[10px] gap-y-[5px]">
                        <p className="col-span-6 row-span-1 text-center self-center text-[35px] ">Contact Me</p>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" placeholder="CompanyName.Inc" type="text" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Email:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" placeholder="johndoe@123.com" type="email" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Contact Number:</label>
                        <input className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1 [&::-webkit-inner-spin-button]:hidden" placeholder="09123456789" inputMode="numeric" type="number" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Message:</label>
                        <textarea className="text-[1.2rem] h-[80px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-2" placeholder="Hi Quekeneth nice meeting you!" type="text" required/>
                        <button className="w-[90%] md:w-[270px] h-[70px] text-[1.2rem] justify-self-center self-center border-2 bg-fink-99 
                        text-white border-transparent shadow-mine hover:bg-white hover:text-fink-99 hover:border-fink-99
                         hover:shadow-fink-99 hover:scale-120 active:scale-90 active:shadow-none duration-300 col-span-6 row-span-2 ">Send</button>
                    </form>
                </div>
                <div className="w-full h-[600px] flex items-center">
                    <div className="w-[80%] min-w-[300px] max-w-[600px] h-[450px] bg-fink-99 mx-auto rounded-2xl flex items-center justify-center">
                        <div className="w-[90%] min-w-[250px] max-w-[550px] h-[400px] bg-white rounded-2xl grid grid-cols-4 grid-rows-5 gap-x-[5px] gap-y-[5px] pb-[20px]">
                            <p className="text-center self-center text-[35px] row-span-1 col-span-4 ">My Links</p>
                            <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" href="#"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/whatsApp.svg" alt="" /></a>
                            <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px]  text-[1.1rem] md:text-[1.2rem]">+639510010846</p>
                            <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="mailto:lacanariaquekeneth46@gmail.com"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/gmail1.svg" alt="" /></a>
                            <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">lacanariaquekeneth46@gmail.com</p>
                            <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://www.facebook.com/queque.neth"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/facebook.svg" alt="" /></a>
                            <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">https://www.facebook.com/queque.neth</p>
                            <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://github.com/quelacanaria"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/github.svg" alt="" /></a>
                            <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">https://github.com/quelacanaria</p>
                            <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://www.linkedin.com/in/quekeneth/"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/linkedin.svg" alt="" /></a>
                            <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px]  text-[1.1rem] md:text-[1.2rem]">https://www.linkedin.com/in/quekeneth/</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forms;
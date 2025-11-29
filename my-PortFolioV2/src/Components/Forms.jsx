function Forms(){
    return(
        <>
            <div className="w-full h-[600px] bg-green-xx content-center">
                <div className="w-[80%] min-w-[320px] h-[500px] bg-fink-99 mx-auto rounded-2xl content-center">
                    <form className="w-[80%] min-w-[300px] h-[85%] bg-white mx-auto rounded-2xl grid p-[30px] grid grid-cols-6 grid-rows-7 gap-x-[10px] gap-y-[10px]">
                        <p className="col-span-6 row-span-1 text-center self-center text-[35px] ">Contact Me</p>
                        <label className="text-[1.2rem] justify-self-end col-span-2 row-span-1" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] border-2 col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] justify-self-end col-span-2 row-span-1" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] border-2 col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] justify-self-end col-span-2 row-span-1" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] border-2 col-span-3 row-span-1" type="text" />
                        <label className="text-[1.2rem] justify-self-end col-span-2 row-span-1" htmlFor="">Company Name:</label>
                        <input className="text-[1.2rem] border-2 col-span-3 row-span-2" type="text" />
                        <button className="w-[100px] h-[60px] justify-self-center self-center border-2 col-span-6">Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forms;
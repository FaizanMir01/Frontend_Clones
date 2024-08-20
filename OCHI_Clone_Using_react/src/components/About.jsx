import coupleImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className='w-full bg-[#cdea68] rounded-t-[3rem] '>
        <div className="para1 p-20">
            <h1 className="text-[3.7vw] leading-[4vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell produts, explain complex ideas, and hire great people.</h1>
        </div>
        <div className="w-full mid border-t-[1px] border-[#3b3b3ba4] flex justify-between p-6 ">
          <div className='w-1/2 px-14'>
            <h1 className="text-[3vw] ">Our approach</h1>
            <button className="px-6 py-4 bg-zinc-800 text-zinc-100 flex items-center gap-8 rounded-full text-2xl">Read More 
            <div className="w-3 h-3 bg-zinc-200 rounded-full"></div></button>
          </div>
          <div className="w-1/2 px-10 ">
            <img className="rounded-[10px]" src={coupleImg} alt="coupleimage" />
          </div>
        </div>
    </div>
  )
}

export default About
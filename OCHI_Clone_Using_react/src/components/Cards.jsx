
import logo from "../assets/ochiLogo.svg";
const Cards = () => {
  return (
    <div className="w-full h-screen flex gap-5 p-20 items-center justify-center ">
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card relative rounded-xl  w-full h-full bg-[#004d43] flex items-center justify-center">
                <img src={logo} alt="logo" />
                <button className="absolute left-10 bottom-10 px-7 py-3 border-[1px] border-[#cdea68] rounded-full text-[#cdea68]">2019-2020</button>
            </div>
        </div>
        <div className="cardcontainer  w-1/2 h-[50vh] flex gap-5">
            <div className="card relative flex items-center justify-center rounded-xl  w-1/2 h-full bg-[#004d43]">
            <img src={logo} alt="logo" />
                <button className="absolute  left-10 bottom-10 px-7 py-3 border-[1px] border-[#cdea68] rounded-full text-[#cdea68]">2019-2020</button>
            </div>
            <div className="card relative flex items-center justify-center rounded-xl  w-1/2 h-full bg-[#212121]">
            <img src={logo} alt="logo" />
                <button className="absolute left-10 bottom-10 px-7 py-3 border-[1px] border-[#cdea68] rounded-full text-[#cdea68]">2019-2020</button>
            </div>
        </div>


    </div>
  )
}

export default Cards
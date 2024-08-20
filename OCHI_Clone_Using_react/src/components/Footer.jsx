import logo from "../assets/ochiLogo.svg";

const Footer = () => {
  return (
    <div className="w-full h-screen p-20 flex ">
        <div className="left w-1/2 h-full flex flex-col justify-between">
            <div className="head">
                <h1 className="text-[8vw] leading-none font-semibold tracking-tighter">EYE-OPENING</h1>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
        <div className="right w-1/2 h-full">
            <div className="head">
                <h1 className="text-[6vw] leading-none font-semibold tracking-tighter">PRESENTATIONS</h1>
            </div>
            <div className="links mt-20 text-3xl ">
                <p>S:</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
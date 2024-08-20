import { useEffect, useState } from "react";
import eyesBack from "../assets/eyesBack.jpg";
const Eyes = () => {
    const [rotate , setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${eyesBack})` }}>
            <div className="flex items-center justify-center gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="eye size-[13vw] bg-zinc-100 rounded-full flex justify-center items-center">
                    <div className="relative inner h-2/3 w-2/3 bg-zinc-900 rounded-full flex justify-center items-center">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                            <div className="ball size-8 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="eye size-[13vw] bg-zinc-100 rounded-full flex justify-center items-center">
                    <div className="relative inner h-2/3 w-2/3 bg-zinc-900 rounded-full flex justify-center items-center">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                            <div className="ball size-8 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Eyes
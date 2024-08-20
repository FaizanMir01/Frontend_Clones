import { motion, useAnimation } from "framer-motion"
import card1Img from "../assets/card1.png"
import card2Img from "../assets/card2.jpg"

const Featured = () => {
    const cards = [useAnimation(),useAnimation()]

    const handleHover= (index)=>{
        cards[index].start({y:"0"})

    }
    const handleHoverEnd= (index)=>{
        cards[index].start({y:"100%"})

    }

  return (
    <div className="featured w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-10">
            <h1 className="text-7xl">Featured projects</h1>
        </div>
        <div className="cards-section p-20 w-full flex gap-10">
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="card-container relative w-1/2">
                <h1 className="absolute flex overflow-hidden left-full top-1/2 text-7xl -translate-x-[50%] -translate-y-[50%] font-semibold text-[#ddfd68] ">
                    {"FYDE".split("").map((index,item)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*.01}} className="inline-block " key={index}>{item}</motion.span>)}
                </h1>
                <div className="card h-[75vh] rounded-2xl overflow-hidden">
                    <img src={card1Img} alt="card image" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="card-container relative w-1/2">
                <h1 className="absolute flex overflow-hidden right-full top-1/2 text-7xl translate-x-[50%] -translate-y-[50%] font-semibold text-[#ddfd68] ">
                    {"VISE".split("").map((index,item)=><motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1], delay:index*.01}} className="inline-block" key={index}>{item}</motion.span>)}
                </h1>
                <div className="card h-[75vh] rounded-2xl overflow-hidden">
                    <img src={card2Img} alt="card image" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Featured
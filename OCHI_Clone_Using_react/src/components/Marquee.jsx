import { motion } from "framer-motion"

const Marquee = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full bg-[#004d43] py-32 flex justify-center  rounded-t-[2rem] ">
        <div className='flex items-center overflow-hidden whitespace-nowrap border-t-2 border-b-2 border-zinc-500 '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}}   className='text-[20vw] uppercase leading-[18vw] font-semibold text-zinc-100 tracking-tighter mb-2 pr-10 '>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}}   className='text-[20vw] uppercase leading-[18vw] font-semibold text-zinc-100 tracking-tighter mb-2 pr-10'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}}   className='text-[20vw] uppercase leading-[18vw] font-semibold text-zinc-100 tracking-tighter mb-2 pr-10 '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
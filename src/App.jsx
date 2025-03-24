import { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { DiCssTricks } from "react-icons/di";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function App() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
  const ref2 = useRef(null);
  const is2InView = useInView(ref2, { once: false });
  const ref3 = useRef(null);
  const is3InView = useInView(ref3, { once: false });
  const ref4 = useRef(null);
  const is4InView = useInView(ref4, { once: false });
  

  return (
    <>
      <div style={{ backgroundColor: "oklch(0.973 0.071 103.193)" }}>
        <nav className="bg-blue-900 p-4 text-white w-90 rounded-full flex justify-center shadow-lg shadow-gray-900 left-250 sticky top-1 z-50">
          <ul className="flex space-x-10">
            <li><a href="#home" className="hover:text-lg duration-300">Home</a></li>
            <li><a href="#proj" className="hover:text-lg duration-300">Project</a></li>
            <li><a href="#others" className="hover:text-lg duration-300">Others</a></li>
          </ul>
        </nav>

        <div>
          <section id="home" className="h-screen flex items-center justify-center text-blue-950">
           
            <motion.div
              ref={ref1}
              animate={isInView ? {rotate:0, opacity: 1 } : {rotate:-20, opacity: 1 }}
              transition={{ duration: .6}}
              className="text-6xl font-mono font-bold text-blue-950 pl-1 absolute top-30 left-25"
            >
             Marl Joshua
            </motion.div>
            <div className='text-2xl text-blue-900 font-mono absolute top-48 left-25'>
              Maragondon, Cavite | 22 | Web Developer
            </div>
            <div className='text-2xl text-blue-900 font-bold absolute top-70 left-25'>
              Skills
            </div>
            <motion.div
              ref={ref3}
              initial={{ x: -500, rotate: 0, opacity: 0 }} // Start off-screen to the left
              animate={is3InView ? { x: 1, opacity: 1, rotate: 0 } : { rotate: 360 }} // Slide in, then stop rotating
              transition={{
                x: { duration: 1, ease: "easeOut" }, // Smooth slide-in
                opacity: { duration: 1 },
                rotate: { duration: 1.5, ease: "linear", repeat: Infinity }, // Always rotates
              }}
              className="text-6xl absolute left-230 top-130"
            >
             <DiCssTricks/>
            </motion.div>

            <img src="https://i.imgur.com/kmfxbDt.jpg" className='absolute w-120 h-70 top-70 right-10 z-10 shadow-lg shadow-gray-900 rounded-2xl'/>
            <div class="w-0 h-0 border-l-[600px] border-l-transparent border-r-[600px] border-r-transparent border-b-[730px] border-b-blue-950 absolute top-10 right-[-600px]"></div>
            <ul className='text-5xl flex justify-center space-x-5 absolute top-170 right-30 'style={{ color: "oklch(0.973 0.071 103.193)" }}>
              <li><a href="https://www.facebook.com/bakus.abnuy/"><FaFacebook/></a></li>
              <li><a href="https://github.com/Sushi1-lab"><FaGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/marl-joshua-banaguas-86a34826b/"><FaLinkedin/></a></li>
              <li><a href="https://www.instagram.com/who0is_marl/"><FaInstagram/></a></li>
            </ul>
              
          </section>

          <section id="proj" className="h-screen flex items-center justify-center text-blue-950">
          <motion.div
              ref={ref2}
              animate={is2InView ? {rotate:0, opacity: 1 } : {rotate:20, opacity: 1 }}
              transition={{ duration:0.6}}
              className="text-5xl font-mono text-blue-950 absolute top-210 left-40"
            >
             Projects
            </motion.div>
          </section>

          <section id="others" className="h-screen flex items-center justify-center text-blue-950">
          <motion.div
              ref={ref4}
              animate={is4InView ? {rotate:0, opacity: 1 } : {rotate:20, opacity: 1 }}
              transition={{ duration:0.6}}
              className="text-5xl font-mono text-blue-950 absolute top-400 left-40"
            >
             Others
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

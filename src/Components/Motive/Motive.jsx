import React from "react";
import "./Motive.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
// import { useParallax } from 'react-scroll-parallax';

const Motive = () => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  // });
  return (
    <div className='Motive'>
      <div className='mot1'>
        <div className='m-left'>
          <Spline scene='https://prod.spline.design/gA6ncek2c6EWBSDF/scene.splinecode' />
        </div>
        <div className='m-right'>
          <motion.div
            // initial={{right:'-50%'}}
            // whileInView={{right:'-8%'}}
            // ref={parallax.ref}
            // transition={{duration:3,type:'spring'}}
            className='m-r1'
          >
            <span>Research</span>
            <span>
              According to a report by the World Health Organization, there are
              currently 284 million people in the world who are visually
              impaired, and 39 million people are blind. It is possible to say
              that 60% of the blindness in the world can be cured, and 20% can
              be prevented. Looking at the age range, it can be said that 60% of
              the visually impaired are aged 65 and over, and there are 19
              million visually impaired children. Our project is specially
              created for the visually impaired persons and blind persons, for
              whom it can act as a third eye, that is why it is named as “Third
              i”.
            </span>
          </motion.div>
        </div>
      </div>

      <div className='mot2'>
        <div className='m-right'>
          <motion.div
            initial={{ left: "-50%" }}
            whileInView={{ left: "10%" }}
            transition={{ duration: 3, type: "spring" }}
            className='m-r1'
          >
            <span>Motive</span>
            <span>
              The “Third i” project makes the visually impaired persons to feel
              like a normal person. Visually impaired assistance using object,
              distance, and face detection is an innovative project designed to
              provide assistance to visually impaired people. it utilizes facial
              recognition to help people identify their friends and relatives,
              as well as object detection with distance estimation to detect
              harmful objects that may be approaching them. if a person carrying
              the object is unknown to the visually impaired, they will be
              issued a warning. this project provides an extra layer of safety
              and security for those with visual impairments, and also provides
              them with the means to identify familiar faces. it is a
              revolutionary way to help the visual impairments to navigate their
              environment safely and independently.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ transform: "rotate(10deg)" }}
          whileInView={{ transform: "rotate(10deg)" }}
          transition={{ duration: 1, type: "spring" }}
          className='m-left'
        >
          <Spline scene='https://prod.spline.design/L-jWw8kqXE8ElZey/scene.splinecode' />
        </motion.div>
      </div>
      
      
      <div className='mot1'>
        <div className='m-left'>
        <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration" width={600}></img>
        </div>
        <div className='m-right'>
          <motion.div
            // initial={{right:'-50%'}}
            // whileInView={{right:'-8%'}}
            // ref={parallax.ref}
            // transition={{duration:3,type:'spring'}}
            className='m-r1'
          >
            <span>Application</span>
            <span>
            The application is designed to be easy to use, requiring only camera access to work. Users simply need to open the app, and it will capture their surrounding video. The app utilizes advanced computer vision algorithms to recognize objects in each frame of the video. Once the app detects an obstacle or person in the user's path, it immediately sends a voice message to the user to help them navigate their environment safely. The app can be used in any setting, making it perfect for navigating unfamiliar environments and based on the user preference SOS feature will be triggered. The development team behind Visually Impaired Assistance Using Object, Distance, And Face Detection provides a solution that empowers visually impaired individuals to live independent and fulfilling lives. The app's user-friendly interface and advanced features make it a game-changer for the visually impaired community. 
            </span>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Motive;

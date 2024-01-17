import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import "./Intro.css";
import imgq from "../../img/bbblurry.png";
import img from "../../img/graph.png";

const Intro = () => {
  return (
    <div className='Intro'>
      <div className='intro'>
        <div className='a-right'>
          <div class='svg'>
            <img
              src={img}
              alt=''
            />
          </div>
          <motion.div
            initial={{ left: "-50%" }}
            whileInView={{ left: "15%" }}
            transition={{ duration: 3, type: "spring" }}
            className='a-r'
          >
            <span>Third i</span>
            <span>
              Detection <span style={{ color: "rgb(73, 226, 132)" }}>& AI</span>{" "}
            </span>
            <span>
              Visually impaired assistance using object, distance, and face
              detection is an innovative project designed to provide assistance
              to visually impaired people. it utilizes facial recognition to
              help people identify their friends and relatives, as well as
              object detection with distance estimation to detect harmful
              objects that may be approaching them. if a person carrying the
              object is unknown to the visually impaired, they will be issued a
              warning. this project provides an extra layer of safety and
              security for those with visual impairments, and also provides them
              with the means to identify familiar faces. it is a revolutionary
              way to help the visual impairments to navigate their environment
              safely and independently.
            </span>
            {/* <div
              data-tooltip='Size: 20Mb'
              class='button'
            >
              <button
                class='button-wrapper'
                disabled
              >
                <div class='text'>Download Paper</div>
                <span class='icon'>
                  <svg
                    viewBox='0 0 24 24'
                    preserveAspectRatio='xMidYMid meet'
                    height='2em'
                    width='2em'
                    role='img'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17'
                      stroke-width='2'
                      stroke-linejoin='round'
                      stroke-linecap='round'
                      stroke='currentColor'
                      fill='none'
                    ></path>
                  </svg>
                </span>
              </button>
            </div> */}
          </motion.div>
        </div>
        <motion.div
          initial={{ right: "-10%" }}
          whileInView={{ right: "0%" }}
          transition={{ duration: 3, type: "spring" }}
          className='a-left'
        >
          {/* <img src={img} alt="" srcet="" /> */}
          {/* <Spline scene="https://prod.spline.design/gA6ncek2c6EWBSDF/scene.splinecode" /> */}
          <img
            src='https://assets.codepen.io/2621168/svgtest.svg'
            alt='Phone illustration'
          ></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;

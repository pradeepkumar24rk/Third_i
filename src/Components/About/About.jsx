import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import "./About.css";
import { team } from "../../data";
import Footer from "../Footer/Footer";
const About = () => {
  const size = 150;

  return (
    <div className='at'>
      <div className='About'>
        <div className='a-left'>
          <Spline scene='https://prod.spline.design/yVwzBR9DYx4nzpu8/scene.splinecode' />
        </div>
        <div className='a-right'>
          <motion.div
            initial={{ right: "-50%" }}
            whileInView={{ right: "-8%" }}
            transition={{ duration: 3, type: "spring" }}
            className='a-r1'
          >
            <span>About us</span>
            <span>Developers</span>
            <span>
              Meet our dynamic team of tech enthusiasts: Madhubalan, our
              Blockchain Developer, is at the forefront of creating
              decentralized solutions with expertise in Ethereum and
              Hyperledger. Pradeepkumar, our Web Developer, transforms ideas
              into visually appealing and efficient web experiences, ensuring
              the delivery of modern and user-friendly websites. Sudharsan, our
              ML Engineer, drives innovation by unraveling insights from data,
              developing cutting-edge machine learning models that tackle
              complex problems. Together, they bring a diverse set of skills and
              passion to elevate your digital experience.
            </span>
          </motion.div>
        </div>
      </div>

      <div className='our-team'>
        <span className='title t1 t'>Our team</span>
        <div className='team'>
          {team.map((data) => (
            <div class='card1'>
              <div class='card-info'>
                <div class='card-avatar'>
                  <img
                    src={data.img}
                    alt=''
                    srcset=''
                    width={size}
                    height={size}
                  />
                </div>
                <div class='card-title'>{data.name}</div>
                <div class='card-subtitle'>{data.desc}</div>
              </div>
              <ul class='card-social'>
                <li class='card-social__item'>
                  <a href={data.github}><FaGithub /></a>
                </li>
                <li class='card-social__item'>
                  <a href={data.instagram}><FaInstagram /></a>
                </li>
                <li class='card-social__item'>
                <a href={data.linkedIn}><FaLinkedin/></a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { educations } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionsWrapper } from "../HOC";
import { University } from "../assets";

const EducationCard = ({education, index}) => {

    console.log("education", education);
  return (
    <Tilt className="w-full m-10">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-row"
        >
          <div className="bg-gradient-to-br">
          <img
            src={University}
            alt={education.school}
            className="object-contain border-white-100 w-[200px] h-[200px]"
          />
          </div>
          <div>
          <h3 className="text-[30px] font-bold text-green-600">
            {education.school}
          </h3>
          <h3 className="text-white text-[20px] font-bold text-center">
            {`${education.degree}, ${education.from} - ${education.to} `}
          </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I graduated</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      {educations.map((education, index) => {
        return(
            <EducationCard
          education={education}
          index={index}
          key={`Education-${index}`}
        />
        )
      }
      )}
    </>
  );
};

export default SectionsWrapper(Education, "education");

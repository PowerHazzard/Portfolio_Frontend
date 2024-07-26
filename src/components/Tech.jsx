import React from "react";
import { SectionsWrapper } from "../HOC";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SkillSets from "./Skill/SkillSet";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am mastering</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex justify-center flex-wrap gap-10">
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
          {technologies?.map((skill_set, index) => (
            <SkillSets
              key={index}
              index={index}
              set_name={skill_set.set_name}
              skill_sets={skill_set.skill_sets}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionsWrapper(Tech, "skills");

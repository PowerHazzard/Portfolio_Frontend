import React from "react";
// import { BallCanvas } from './canvas';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import Skill from "./skill";

const SkillSets = (props) => {
  const { skill_sets, set_name, index } = props;
  return (
    <div className={`bg-tertiary rounded-2xl ${styles.paddingX} py-4`}>
      <motion.div variants={textVariant()}>
        <h3 className="text-white text-[30px] font-bold mb-10 text-center">
          {`${set_name}`}
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div className="flex justify-center flex-wrap gap-x-10 gap-y-3 pb-3">
          {skill_sets?.map((skill, skill_index) => (
            <Skill
              icon={skill.icon}
              key={skill_index}
              index={skill_index}
              text={skill.name}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillSets;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Tilt from "react-tilt";

const Skill = (props) => {
  const { index, icon, text } = props;
  const tilt_options = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.4, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Tilt className="xs:w-[125px] w-full" options={tilt_options}>
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-slate-700 bg-opacity-20 rounded-[20px] py-1 px-6 flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={text} className="h-[70px] object-contain p-2 " />
        <h3 className="text-white text-[16px] text-center">{text}</h3>
      </div>
    </Tilt>
  );
};

export default Skill;

import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/Data";
import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="py-16 bg-[#050709]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

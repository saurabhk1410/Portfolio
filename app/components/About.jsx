import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { Briefcase, Medal, BarChart3 } from "lucide-react";
import { FaBriefcase, FaAward, FaChartLine } from "react-icons/fa";


const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center I gap-20 my-20">
        <div className="flex-1">
          <p className="mb-10 w-full text-center px-10 font-Ovo">
            IT undergraduate with expertise in full-stack web development. Experienced in building scalable, responsive applications
            with a strong problem-solving mindset, demonstrated through
            hackathons and coding achievements. I have completed an internship as front-end developer successfully
          </p>
 
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6
                cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500"
                key={index}
              >
                
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I used </h4>
          <ul className="flex items-center gap-3 xm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer
                hover:-translate-y-1  duration-500"
                key={index}
              >
                <Image
                  src={tool}
                  alt={`Tool ${index + 1}`}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;

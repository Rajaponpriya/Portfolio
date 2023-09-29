import { DiJavascript1, DiReact, DiNodejs, DiPython, DiJava, } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiSolidity, SiPostgresql,} from "react-icons/si";
const Skills = () => {
    const skills = [
      {
        icon: <CgCPlusPlus />,
        level: "Advance",
        count: 82,
      },
      {
        icon: <DiJavascript1 />,
        level: "Advance",
        count: 82,
      },
      {
        icon: <DiReact />,
        level: "Expect",
        count: 90,
      },
      {
        icon: <DiJava />,
        level: "Intermediate",
        count: 75,
      },
      {
        icon: <SiSolidity />,
        level: "Intermediate",
        count: 75,
      },
      {
        icon: <DiNodejs />,
        level: "Beginner",
        count: 45,
      },
      {
        icon: <DiPython />,
        level: "Beginner",
        count: 45,
      },
      {
        icon: <SiPostgresql />,
        level: "Beginner",
        count: 45,
      },
    ];
    return (
      <section id="skills" className="py-10 bg-gray-800 relative">
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    {skill.icon}
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    );
  };
  
  export default Skills;
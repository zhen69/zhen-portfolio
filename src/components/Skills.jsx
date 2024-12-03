import BallCanvas from "./canvas/Ball";
import { technologies } from "../data";

export default function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-center gap-y-7">
      <h1
        className="
            text-center text-[42px] font-bold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500 py-9"
      >
        Technical Skills / Tech Stack
      </h1>
      <div className="grid grid-cols-6 gap-y-20 w-10/12">
        {technologies.map((technology) => (
          <div className="w-28 h-28 place-self-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

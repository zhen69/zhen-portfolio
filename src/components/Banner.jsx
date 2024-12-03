import ProfileImg from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { introduction } from "../data";
import { Linkedin, Github, FilePdfFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="h-full pt-[72px] 
        grid grid-cols-2 items-center px-11"
    >
      <div className="place-self-center w-8/12">
        <h1
          className="
            text-6xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500 mb-5
            w-max"
        >
          {introduction.name}
        </h1>
        <TypeAnimation
          sequence={introduction.title}
          repeat={Infinity}
          className="text-4xl font-semibold lg:absolute"
        />
        <p className="lg:mt-20 mt-5">{introduction.description}</p>
        <div className="flex items-center gap-7 mt-7">
          <button
            onClick={() => navigate("/#contact")}
            className="bg-gradient-to-r 
                from-blue-600 to-purple-500
                py-3 px-4 rounded-md"
          >
            {"Let's Connect"}
          </button>
          <Link to={introduction.links.linkedin} title="Linkedin">
            <Linkedin size={40} />
          </Link>
          <Link to={introduction.links.github} title="Github">
            <Github size={40} />
          </Link>
          <Link to={introduction.links.resume} title="Resume">
            <FilePdfFill size={40} />
          </Link>
        </div>
      </div>
      <img
        src={ProfileImg}
        alt="Zhen's Profile Image"
        width="75%"
        className="place-self-center"
        loading="lazy"
      />
    </section>
  );
}

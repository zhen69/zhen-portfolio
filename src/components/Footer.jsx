import { introduction } from "../data";
import { Linkedin, Github, FilePdfFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card p-11 flex justify-center items-center">
      <div className="w-8/12 flex justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold">Zhen Wei Liao</h3>
          <p>B.S. in Computer Science | Class of 2025</p>
          <p>Email: zhenwei.liao@gmail.com</p>
        </div>
        <div className="w-fit flex flex-col gap-5">
          <h4 className="text-2xl text-end font-semibold font-sans">
            Follow Me!
          </h4>
          <div className="flex gap-7">
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
          <p className="text-md text-end">Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
}

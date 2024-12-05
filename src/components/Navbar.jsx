import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../data";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`bg-primary flex justify-between h-16 items-center px-16 
        fixed top-0 w-full py-9 z-50`}
    >
      <Link
        className="flex items-center gap-2"
        to="/zhen-portfolio"
        onClick={() => {
          setActive("");
          document.getElementsByTagName("main")[0].scrollTo(0, 0);
        }}
      >
        <img src={Logo} alt="Zhen's Portfolio Site Logo" width={50} />
        <p className="text-xl font-bold">Zhen</p>
      </Link>
      <ul className="flex items-center h-full list-none">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer h-full"
            onClick={() => setActive(item.href)}
          >
            <a
              href={`${item.title === "Resume" ? "" : "#"}${item.href}`}
              alt={`${item.title} Section Link`}
              className={`
                h-full flex items-center 
                ${
                  active === item.href ? "text-primary-white" : "text-stone-400"
                } 
                hover:text-primary-white transition-all 
                duration-300 ease-in-out px-4 font-medium`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center h-full ">
        <a
          href="#contact"
          alt="Contact Section Link"
          className="
            text-stone-400 hover:text-primary-white 
            transition-all duration-300 ease-in-out
            h-full flex items-center px-4 font-medium"
        >
          {"Let's Connect"}
        </a>
      </div>
    </nav>
  );
}

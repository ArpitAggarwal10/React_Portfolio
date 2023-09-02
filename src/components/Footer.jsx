import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import btcsrc from "../assets/Arpit's Picture(1).jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={btcsrc}
          alt="Founder"
        />
        <h2>Arpit Aggarwal</h2>
        <p>Motivation Is Temporary , But Discipline Lasts Forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/ArpitAggarwal10" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/arpit-aggarwal10/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
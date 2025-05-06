import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Sowmya
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
  play
  duration={1.5}
  delay={1}
  start={{
    transform: "translateY(550px)",
  }}
  end={{
    transform: "translatex(0px)",
  }}
>
  <div className="home__contact-me">
    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
    <a href="/resumee.pdf" download>
      <button>Download Resume</button>
    </a>
  </div>

  <div className="home__social-icons">
    <a
      href="https://www.linkedin.com/in/sowmya-korada-07a16a280"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={30} />
    </a>
    <a
      href="https://www.instagram.com/koradasowmya?igsh=eGw5bTg5dGlzNHQ4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={30} />
    </a>
  </div>
</Animate>


    </section>
  );
};
export default Home;
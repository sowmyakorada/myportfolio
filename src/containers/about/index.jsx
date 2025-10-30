import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const personalDetails = [
    {
      label: "Name",
      value: "Korada Sowmya",
    },
    {
      label: "Age",
      value: "21",
    },
    {
      label: "Address",
      value: "Andhrapradesh,India",
    },
    {
      label: "Email",
      value: "koradasowmya1234@gmail.com",
    },
    {
      label: "Contact No",
      value: "+91 8367333010",
    },
  ];

  
  const jobSummary =
  "Motivated and detail-oriented Front-End Developer with a strong foundation in HTML, CSS, JavaScript,ReactJs and responsive web design. Proficient in modern frameworks like React and familiar with version control systems like Git. Passionate about creating user-friendly, visually appealing web interfaces and continuously learning emerging technologies. Eager to contribute to collaborative team environments and build meaningful digital experiences.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
                      play
                      duration={1.5}
                      delay={1}
                      start={{
                        transform: "translateX(600px)",
                      }}
                      end={{
                        transform: "translatex(0px)",
                      }}
                    >
                      <div className="about__content__servicesWrapper__innerContent">
                        <div>
                          <FaHtml5 size={60} color="var( --yellow-theme-main-color)" />
                        </div>
                        <div>
                          <FaCss3Alt size={60} color="var( --yellow-theme-main-color)" />
                        </div>
                        <div>
                          <FaJsSquare size={60} color="var( --yellow-theme-main-color)" />
                        </div>
                        <div>
                          <FaReact size={60} color="var( --yellow-theme-main-color)" />
                        </div>
                      </div>
                    </Animate>
                  </div>
                </div>
              </section>
            );
          };
          export default About;

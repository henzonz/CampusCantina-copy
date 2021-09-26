import React from "react";
import "../../assets/css/about_individual.css";
import ProfilePic from "../../assets/img/about/rinay/rinay.jpg";
import PythonLogo from "../../assets/img/about/bhavani/python.png";
import NodeLogo from "../../assets/img/about/bhavani/node.png";
import CSSLogo from "../../assets/img/about/bhavani/css.png";
import HTMLLogo from "../../assets/img/about/bhavani/html.png";
import JSLogo from "../../assets/img/about/bhavani/javascript.png";
import FlaskLogo from "../../assets/img/about/bhavani/flask.png";
import ReactLogo from "../../assets/img/about/bhavani/react.png";
import Chainz from "../../assets/img/about/rinay/chainz.gif";
import Soda from "../../assets/img/about/rinay/soda.gif";
import Word from "../../assets/img/about/rinay/word.png";
import Linked from "../../assets/img/about/rinay/linkedin.png";

const Rinay = () => {
  // React.useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div className="about-page m-5">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="mx-5">
          <img
            className="card-border-size rounded-circle about-img"
            src={ProfilePic}
            alt="profilepicture"
          />
        </div>
        <div className="about-me-text pt-5 text-dark">
          <p className="h1 primary-color">About Me</p>
          <h4 className="primary-color">Rinay Kumar</h4>
          <p className="primary-color">
            Undergraduate Student <br /> San Francisco State University
          </p>
        </div>
      </div>

      <div className="about-body container-fluid">
        <div className="about-desc card">
          <div className="card-header primary-color-bg secondary-color">
            <i className="fas fa-university mr-2" />
            <i className="fas fa-server mr-2" />
            {/* <i className="fas fa-heart mr-2" /> */}
            {/* <i className="fas fa-music mr-2" /> */}
          </div>
          <div className="card-body bg-light">
            <p>
              <img src={Linked} alt="" height="18px" />
              <a
                href="https://www.linkedin.com/in/rinaykumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rinaykumar
              </a>
            </p>
            <p>
              <i>
                Hello there, I'm a senior undergrad student in Computer Science
                at SFSU.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Javascript</h4>
              <img src={JSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Node.js</h4>
              <img src={NodeLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">React.js</h4>
              <img src={ReactLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Python</h4>
              <img src={PythonLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Flask</h4>
              <img src={FlaskLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">HTML</h4>
              <img src={HTMLLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">CSS</h4>
              <img src={CSSLogo} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                2CHAINZ OR BOT
              </span>
              <blockquote className="card-body bg-light font-italic">
                <a
                  href="https://www.2chainzorbot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2chainzorbot.com
                </a>
                <br />
                <br />A fullstack web application built with Python3 and Flask
                for the backend, and with Node.js and React.js for the frontend.
              </blockquote>
              <img
                className="card-img-bottom img-fluid"
                src={Chainz}
                width="200"
                height="200"
                alt=""
              />
              <a
                className="text-white mt-3"
                href="https://github.com/rinaykumar/2chainz-or-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                sodaChat
              </span>
              <blockquote className="card-body bg-light font-italic">
                <a
                  href="https://sodachat.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sodchat.net
                </a>
                <br />
                <br />
                Fullstack live chat web application built with a great team.
                Backend: Java, Spark, Maven, MongoDB, WebSocket. Frontend:
                React.js, Node.js, Express.js, HTML, CSS
              </blockquote>
              <img
                className="card-img-bottom img-fluid"
                src={Soda}
                width="200"
                height="200"
                alt=""
              />
              <a
                className="text-white mt-3"
                href="https://github.com/rinaykumar/sodaChat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Word Blast
              </span>
              <blockquote className="card-body bg-light font-italic">
                A CLI program built with C, pthreads, and Linux system calls.
                Takes a text file, parses it, finds words with 6 or more
                characters, counts their occurrences, then displays the top 10
                most used 6+ character words, using concurrent threads.
              </blockquote>
              <img
                className="card-img-bottom img-fluid"
                src={Word}
                width="200"
                height="200"
                alt=""
              />
              <a
                className="text-white mt-3"
                href="https://github.com/rinaykumar/word-blast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rinay;

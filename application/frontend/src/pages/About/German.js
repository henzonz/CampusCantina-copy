import React from "react";
import "../../assets/css/about_individual.css";
import ProfilePic from "../../assets/img/about/german/german.jpg";
import PythonLogo from "../../assets/img/about/bhavani/python.png";
import SQLLogo from "../../assets/img/about/german/sql.png";
import CPPLogo from "../../assets/img/about/german/cpp.png";
import JavaLogo from "../../assets/img/about/german/java.jpg";
import RLogo from "../../assets/img/about/german/rstudio.svg";

const German = () => {
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
          <h4 className="primary-color">German Perez</h4>
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
            <i className="fas fa-heart mr-2" />
            <i className="fas fa-music mr-2" />
          </div>
          <div className="card-body bg-light">
            <p>
              <i>
                Hello there, I'm a Computer Science student at SFSU with a minor
                in mathematics.
                <br />
                My fields of interest are in data analytics as well as
                statistical analysis.
                <br />
                About myself, I was born and raised in the city of Los Angeles
                and I decided to move to San Francisco in 2017.
                <br />
                Some of my favorite pastimes include long distance running,
                watching cult classics, and finding the next foodie hotspot.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Java</h4>
              <img src={JavaLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">C++</h4>
              <img src={CPPLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Python</h4>
              <img src={PythonLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">R Code</h4>
              <img src={RLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">SQL</h4>
              <img src={SQLLogo} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Calculator
              </span>
              <blockquote className="card-body bg-light font-italic">
                A simple calculator with a basic calculator GUI. The data
                structures used to implement this calculator were two stacks and
                a hashmap. Using the operator priority chart, a hierarchy of
                operator importance was created to help adhere to the PEMDAS
                mathematical order.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/germanp123/calculator"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Virtual Memory Manager
              </span>
              <blockquote className="card-body bg-light font-italic">
                This project consists of writing a program that translates
                logical to physical addresses for a virtual address space. Using
                a TLB as well as a page table, it will translate each logical
                address to its corresponding physical address and output the
                value of the byte stored at the translated physical address.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/csc415-01-SU2020/csc415-p4-germanp123"
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

export default German;

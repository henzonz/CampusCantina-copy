import React from "react";
import "../../assets/css/about_individual.css";
// Images
import Rajdeep from "../../assets/img/about/rajdeep/rajdeep.jpg";
import Rinay from "../../assets/img/about/rinay/rinay.jpg";
import Bhavani from "../../assets/img/about/bhavani/bhavani.jpg";
import Frederick from "../../assets/img/about/frederick/frederick.jpg";
import German from "../../assets/img/about/german/german.jpg";
import Henzon from "../../assets/img/about/henzon/henzon.jpg";

const About = () => {
  return (
    <div className="text-center m-4">
      <div className="container-fluid centered">
        <span
          className="h1 text-center"
          style={{ fontWeight: "800" }}
        >
          About Us
        </span>
        <p
          className="h3 text-center primary-color mt-1"
          style={{ fontWeight: "800" }}
        >
          TEAM 04
        </p>
        <strong className="primary-color">
          San Francisco State University
        </strong>
        <p className="primary-color">Spring 2021</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <p className="text-center">
              We're Team 04 from CSC 648/848, Section 03.
            </p>
            <p className="text-justify">
              We're all senior undergraduate/graduate Computer Science majors at
              San Francisco State University. This web application serves as a
              capstone project.
              <br />
            </p>
            <p className="text-justify">
              The backend is built with NodeJS and MySQL database served on an
              Express framework with NGINX, hosted on an AWS EC2 instance, with
              the frontend styled using React and Bootstrap4.
              <br />
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="card-deck">
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rajdeep}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Rajdeep
                    </h4>
                    <p className="card-text">Team Lead</p>
                    <a href="/about/rajdeep">
                      <button
                        className="btn about-more-btn text-white stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rinay}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Rinay
                    </h4>
                    <p className="card-text">Backend Lead</p>
                    <a href="/about/rinay">
                      <button
                        className="btn about-more-btn text-white stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Bhavani}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Bhavani
                    </h4>
                    <p className="card-text">Frontend Lead</p>
                    <a href="/about/bhavani">
                      <button
                        className="btn about-more-btn text-white stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="card-deck">
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Frederick}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Frederick
                    </h4>
                    <p className="card-text">GitHub Master</p>
                    <a href="/about/frederick">
                      <button
                        className="btn about-more-btn text-white  stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={German}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      German
                    </h4>
                    <p className="card-text">Frontend Team</p>
                    <a href="/about/german">
                      <button
                        className="btn about-more-btn text-white  stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-border-size rounded m-2">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Henzon}
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Henzon
                    </h4>
                    <p className="card-text">Backend Team</p>
                    <a href="/about/henzon">
                      <button
                        className="btn about-more-btn text-white  stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

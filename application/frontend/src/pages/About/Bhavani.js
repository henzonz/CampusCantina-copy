import React from "react";
import "../../assets/css/about_individual.css";
import ProfilePic from "../../assets/img/about/bhavani/bhavani.jpg";
import PythonLogo from "../../assets/img/about/bhavani/python.png";
import NodeLogo from "../../assets/img/about/bhavani/node.png";
import CSSLogo from "../../assets/img/about/bhavani/css.png";
import HTMLLogo from "../../assets/img/about/bhavani/html.png";
import JSLogo from "../../assets/img/about/bhavani/javascript.png";
import JinjaLogo from "../../assets/img/about/bhavani/jinja.png";
import FlaskLogo from "../../assets/img/about/bhavani/flask.png";
import ReactLogo from "../../assets/img/about/bhavani/react.png";

const Bhavani = () => {
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
          <h4 className="primary-color">Bhavani Goruganthu</h4>
          <p className="primary-color">
            Graduate Student <br /> San Francisco State University
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
                Hello there, I am a second semester graduate student in Computer
                Science at SFSU.
                <br />
                I am interested in full-stack development and I am keen to
                gather experience in UI/UX designing as well.
                <br />
                Little about myself, I am originally from Hyderabad, India. I
                moved to the USA in 2018 and currently reside in Sunnyvale,
                California. <br />
                Capturing moments is one of my several interests. I likewise
                prefer to binge-watch Netflix movies/series & listen to pleasant
                music.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">HTML</h4>
              <img src={HTMLLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">CSS</h4>
              <img src={CSSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Javascript</h4>
              <img src={JSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">React.js</h4>
              <img src={ReactLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Node.js</h4>
              <img src={NodeLogo} width="74" height="74" alt="" />
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
              <h4 className="about-skill-name">Jinja</h4>
              <img src={JinjaLogo} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Photobook
              </span>
              <blockquote className="card-body bg-light font-italic">
                A Photobook Website enables users to upload a photo (stored in
                Cloud Storage) and its metadata (stored in Cloud Datastore). The
                images are passed on to Google Vision API and are automatically
                categorized based on the labels returned by the API.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/bhavani-goruganthu/CSC847_GAE_Proj2_VisionAPI"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Student Directory on GCP
              </span>
              <blockquote className="card-body bg-light font-italic">
                A Student Directory Website has been developed which is hosted
                on the GCE’s instances and enables users to display all the
                students, add a student and search for students using Cloud SQL
                for MySQL.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/bhavani-goruganthu/gce_studentapp"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                Quote Keeper
              </span>
              <blockquote className="card-body bg-light font-italic">
                This website saves Quotes on-the-go by using Google Cloud
                Machine Learning API's. It can be a picture of a quote, a
                downloaded image, a hand-written quote or a recorded one. All
                quotes are saved in free text mode in Google Cloud Datastore.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/bhavani-goruganthu/Flask-Projects/tree/master/CloudComputing/GP"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <span className="h4 about-skill-name font-weight-bold">
                eCommerce Website
              </span>

              <blockquote className="card-body bg-light font-italic">
                This is a single page React app with distributed microservices
                back end which is developed based on latest technologies like
                Redis, Kafka, WebSocket, ReacttJS, ExpressJS, Mongodb.
              </blockquote>
              <a
                className="text-white"
                href="https://github.com/bhavani-goruganthu/final-project-listy"
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

export default Bhavani;

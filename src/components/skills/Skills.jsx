import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills section hidden" id="skills">
      <div className="skills-container container gird">
        <div className="skills-content">
          <h3 className="skills-title">
            <i className="ri-braces-fill"></i> Front-End Skills
          </h3>
          <div className="skills-info">
            <div className="skills-data skills-card">
              <div className="skills-blob skills-card-img hidden">
                <img src="/html.svg" alt="" />
              </div>
              <h3 className="skills-card-name">HTML</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>

            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/css.svg" alt="" />
              </div>
              <h3 className="skills-card-name">CSS</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>

            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/js.svg" alt="" />
              </div>
              <h3 className="skills-card-name">javascript</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>

            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/react.svg" alt="" />
              </div>
              <h3 className="skills-card-name">React</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>

            <div className="skills-data skills- hiddenc style='--order:1'ard hidden">
              <div className="skills-blob skills-card-img">
                <img src="/bootstrap.svg" alt="" />
              </div>
              <h3 className="skills-card-name">Bootstrap</h3>
              <span className="skills-subtitle">Basic</span>
            </div>

            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/typescript.svg" alt="" />
              </div>
              <h3 className="skills-card-name">Typescript</h3>
              <span className="skills-subtitle">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills-content">
          <h3 className="skills-title">
            <i className="ri-braces-fill"></i> Backend Skills
          </h3>
          <div className="skills-info">
            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/nodejs.svg" alt="" />
              </div>
              <h3 className="skills-card-name">Node.js</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>
            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/mongo.svg" alt="" />
              </div>
              <h3 className="skills-card-name">MongoDb</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>
            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/firebase.svg" alt="" />
              </div>
              <h3 className="skills-card-name">Firebase</h3>
              <span className="skills-subtitle">Intermediate</span>
            </div>
            <div className="skills-data skills-card hidden">
              <div className="skills-blob skills-card-img">
                <img src="/git.svg" alt="" />
              </div>
              <h3 className="skills-card-name">Git</h3>
              <span className="skills-subtitle">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

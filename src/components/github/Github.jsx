import React from "react";
import "./github.scss";

const Github = () => {
  return (
    <div className="leetcode-github-info-wrapper react-activity-calendar">
      <h1>
        <b>My</b> Stats
      </h1>
      <div className="stats-block">
        <div className="leetcode-stats">
          <h4>Leetcode Stats</h4>
          <img
            src="https://leetcard.jacoblin.cool/Faisal_24?theme=nord"
            alt=""
          />
        </div>

        <div className="github-info-card">
          <div className="github-cont-stats">
            <h4 className="github-info-card-title">Github Streak</h4>
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=Faisal25DEC&theme=nord"
              id="github-streak-stats"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="stats-block stats-second">
        <div className="github-info-card">
          <h4>Github Languages</h4>
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Faisal25DEC&layout=compact&theme=nord"
            alt="faisal25dec"
          />
        </div>
        <div className="github-info-card">
          <div className="github-rating-stats">
            <h4 className="github-infor-card-title">Github Stats</h4>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Faisal25DEC&show_icons=true&theme=nord"
              id="github-stats-card"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;

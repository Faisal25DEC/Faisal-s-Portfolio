import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-start">
        <h2 className="footer-name">Muhammad Faisal</h2>
        <div id="footer-bottom-profiles">
          <a
            href="https://leetcode.com/Faisal_24/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/leetcode.png" alt="" />
          </a>
          <a
            href="https://codeforces.com/profile/FaisalCodeGreat"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/codeforces.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal25121999/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/Faisal25DEC"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-dark.png" alt="" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/mohdfaisal2363/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/geeksforgeeks.png" alt="" />
          </a>
        </div>
        <div className="footer-end">
          <p>Made with ❤️ By Mohd Faisal</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

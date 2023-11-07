import "./about-me.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  return (
    <motion.div
      className="about-me"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          My ultimate focus lies with building advanced websites <br></br>
          and exploring solutions
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <h1>
            <b>Everything</b> About Me
          </h1>
        </div>
        <a
          href="https://drive.google.com/file/d/1InvIaBqOSEOiCSrM57crRzh1FnBPmd1I/view?usp=sharing"
          target="_blank"
          rel={"noreferrer"}
        >
          <motion.button className="resume">Resume</motion.button>
        </a>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h2>Education</h2>
          <p className="box-desc">
            Hi, I am Muhammad Faisal, an accomplished{" "}
            <b>
              B. Tech graduate in Computer Science and Engineering,from ADGITM{" "}
            </b>
            , Delhi, specializing in the dynamic realm of{" "}
            <b> full-stack web development</b>
          </p>
          <a
            href="https://www.linkedin.com/in/faisal25121999/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              <img src="/linkedin.png" alt="" /> Go
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Projects</h2>
          <p className="box-desc">
            <h1>
              7+
              <br /> Major Projects
            </h1>
          </p>
          <a
            href="https://github.com/Faisal25DEC"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              <img src="/github.png" alt="" /> Go
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Data Structures & Algorithms</h2>
          <p className="box-desc">
            <h1>
              850+
              <br /> DSA Problems
            </h1>
          </p>
          <a
            href="https://leetcode.com/Faisal_24/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              <img src="/leetcode.png" alt="" /> Go
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Achievements</h2>
          <p className="box-desc">
            <h2>
              650+ <br></br>Problems on Leetcode
            </h2>
            <br />
            <h2>
              DSA mentor <br /> Coding Ninjas
            </h2>
          </p>
          <a
            href="https://drive.google.com/file/d/1cqskSvjLVYD4QkIBewIqXjjWjYc-gi-i/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              <img src="/certificate.png" alt="" /> Go
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;

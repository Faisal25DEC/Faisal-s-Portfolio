import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Faisal
        </motion.span>
        <div className="social">
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
            href="https://auth.geeksforgeeks.org/user/mohdfaisal2363/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/geeksforgeeks.png" alt="" />
          </a>
          <a
            href="https://github.com/Faisal25DEC"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-dark.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

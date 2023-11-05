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
          <a href="">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="">
            <img src="/codeforces.png" alt="" />
          </a>
          <a href="">
            <img src="/geeksforgeeks.png" alt="" />
          </a>
          <a href="">
            <img src="/github-dark.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

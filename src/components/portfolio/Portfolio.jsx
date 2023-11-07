import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Adventour",
    img: "/adventour-collage-2.png",
    desc: (
      <p>
        A beautifully animated and entirely user-specific website built on{" "}
        <b>React.js and Firebase</b> and many other CSS libraries and framework
        for design
      </p>
    ),
    techStack: [
      "/react.svg",
      "/firebase.svg",
      "/bootstrap.svg",
      "/json-server.png",
    ],
  },
  {
    id: 2,
    title: "BlogsTour.com",
    img: "/medium-collage-1.png",
    desc: (
      <p>
        A Complete <b>MERN Stack</b> blog website similar to <b>Medium.com</b>{" "}
        which supports CRUD operations and have entirely user specific features
        like comments, like, unlike, follows etc.
      </p>
    ),
    techStack: [
      "/react.svg",
      "/mongo.svg",
      "/chakra.png",
      "/nodejs1.png",
      "/redux.svg",
    ],
  },
  {
    id: 3,
    title: "Alcazar Travel Agency",
    img: "/alcazar-collage-1.png",
    desc: (
      <p>
        <b>User Specific Vanilla Javascript E-commerce website</b>, built on
        HTML, CSS, Javascript, Firebase and JSON-Server
      </p>
    ),
    techStack: [
      "/html.svg",
      "/css.svg",
      "/js.svg",
      "/json-server.png",
      "/firebase.svg",
    ],
  },
  {
    id: 4,
    title: "Instagram Clone",
    img: "/instagram-collage-1.png",
    desc: (
      <p>
        A complete working clone of Instagram where users can Create Posts,{" "}
        <b>Update their profiles</b>, and have all features of instagram
      </p>
    ),
    techStack: [
      "/react.svg",
      "/nodejs1.png",
      "/mongo.svg",
      "/chakra.png",
      "/redux.svg",
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              <button>Live Link</button>
              <div className="techStack">
                {item.techStack?.map((img, idx) => {
                  return <img src={img} key={idx} />;
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

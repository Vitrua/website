import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Git Magic",
    img: "https://i.imgur.com/PV4MYNn.jpg",
    desc: "Embark on a magical journey into the realm of version control with our introductory Git lesson, where wizards and apprentices alike will unravel the secrets of collaborative coding.",
    url: "https://docs.vitrua.top/Git%20Magic/01_Basic%20workflow/"
  },
  {
    id: 2,
    title: "Kubernetes dungeon",
    img: "https://i.imgur.com/7dfLRHR.jpg",
    desc: "Embark on a heroic quest into the Kubernetes Dungeon! Conquer beginner challenges with basic commands, mastering the art of deploying, scaling, and discovering enchanting services.",
    url: "https://docs.vitrua.top/Kubernetes%20Dungeon/01_Services"
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer"><button>Let's go</button></a>
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
        <h1>Available Guides</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

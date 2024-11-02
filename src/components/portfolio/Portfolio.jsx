import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Misc Magic",
    img: "https://i.imgur.com/PV4MYNn.jpg",
    desc: "Enter the magical realm of technology stacks, where wizards and novices traverse the landscape of collaborative innovation with an assortment of miscellaneous tools.",
    url: "https://docs.vitrua.top/Misc%20Magic/01_Git_Basic_workflow/"
  },
  {
    id: 2,
    title: "Kubernetes Dungeon",
    img: "https://i.imgur.com/7dfLRHR.jpg",
    desc: "Embark on a heroic quest into the Kubernetes Dungeon! Conquer beginner challenges with basic commands, mastering the art of deploying, scaling, and discovering enchanting components.",
    url: "https://docs.vitrua.top/Kubernetes%20Dungeon/01_Pods/"
  },
  {
    id: 3,
    title: "Operative Systems Space",
    img: "https://github.com/Vitrua/images/blob/main/ospace/penguinspace.jpg?raw=true",
    desc: "Journey into the depths of the Operative Systems, where celestial travelers navigate the Linux, Windows, Mac and all the other multiverses amidst the glittering stars of command lines and cosmic operations.",
    url: "https://docs.vitrua.top/OSpace/01_Basic_Linux/"
  },
  {
    id: 4,
    title: "Openshift Castle",
    img: "https://github.com/Vitrua/images/blob/main/openshift/explorepod.jpg?raw=true",
    desc: "Step into the grandeur of Openshift Castle, where each tutorial is a fortified tower of knowledge. Learn to defend your deployments and scale your fortifications, mastering the realm of cloud-native applications with guided quests.",
    url: "https://docs.vitrua.top/OpenShift%20Castle/01_authentication_new_project_basics/"
  },
  {
    id: 5,
    title: "WorkFlows",
    img: "https://github.com/Vitrua/images/blob/main/workflows/butlerwhale.jpg?raw=true",
    desc: "Dive into WorkFlows, an underwater odyssey where each task is a marine adventure. Explore the deep sea, uncovering treasures of efficiency and automation.",
    url: "https://docs.vitrua.top/WorkFlows/01_local_jenkins_openid/"
  }
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
          <motion.div className="textContainer" style={{ y }} drag={false}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} rel="noopener noreferrer"><button>Let's go</button></a>
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
      <div className="portfolio-items-container">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

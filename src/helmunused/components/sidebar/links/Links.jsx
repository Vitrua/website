import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const baseUrl = "https://vitrua.top";
  return (
    <motion.div className="links" variants={variants}>
      <motion.a href={`${baseUrl}/#Home`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
        {"Home"}
      </motion.a>
      <motion.a href={`${baseUrl}/chobe/`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
        {"Chobe"}
      </motion.a>
      <motion.a href={`${baseUrl}/autoversion/`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
        {"Autoversion"}
      </motion.a>
      <motion.a href={`${baseUrl}/helmunused/`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
        {"Helm unused"}
      </motion.a>
    </motion.div>
  );
};

export default Links;

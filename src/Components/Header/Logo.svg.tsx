import { motion } from "framer-motion";

const LogoSvg = () => {

  const circleVariants = {
    hidden: {
      fill: "rgb(192,216,192)",
      rotate: 180,
    },
    visible: {
      fill: "rgb(221,74,72)",
      rotate: 0,
      transition: { duration: 2 } 
    }
  };

  const iconVariants = {
    hidden: {
      pathLength: 0,
      rotate: 180,
    },
    visible: {
      pathLength: 1,
      rotate: 0,
      transition: { duration: 1 } 
    }
  }

  return(
    <motion.svg width="55" height="55" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect width="80" height="80" rx="40" fill="#DD4A48" initial="hidden" animate="visible" variants={circleVariants}/>
      <motion.path d="M24 24V44.5977C24 44.5977 24 56 32.5207 56C41.0414 56 41.0414 44.5977 41.0414 44.5977V31.7241C41.0414 31.7241 41.0414 24 48.2367 24C55.432 24 56 31.7241 56 31.7241C56 31.7241 56 44.5977 56 56" stroke="#ECB390" strokeWidth="8" initial="hidden" animate="visible" variants={iconVariants}/>
    </motion.svg>
  )
};

export default LogoSvg
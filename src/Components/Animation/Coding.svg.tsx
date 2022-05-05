import { motion } from "framer-motion";

const CodingSvg = () => {
  const CodingValiant = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    active: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <svg
      width="100%"
      height="252"
      viewBox="0 0 410 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M104.735 62.3461C86.8705 77.7633 70.4446 96.5336 55.7201 116.14C53.1374 119.579 54.8967 120.708 57.3044 123.736C62.0935 129.758 66.9999 135.202 72.3553 140.422C81.9161 149.739 100.543 166.253 101.665 167.443C103.632 169.528 105.66 171.684 105.66 171.684M308.66 62.9123C323.812 79.8505 343.249 97.5052 356.206 116.518C358.284 120.362 347.42 130.285 345.408 132.815C342.169 136.889 337.85 140.963 337.85 140.963C336.728 142.373 331.371 147.753 331.371 147.753C331.371 147.753 327.393 151.445 327.052 151.827C327.052 151.827 321.002 158.078 318.414 161.334C314.515 166.236 308.66 172.198 308.66 172.198M23.5957 250H386.404C398.331 250 408 240.26 408 228.246V23.7544C408 11.7398 398.331 2 386.404 2H23.5957C11.6687 2 2 11.7398 2 23.7544V228.246C2 240.26 11.6687 250 23.5957 250Z"
        stroke="#4B6587"
        strokeWidth="3"
        strokeLinecap="round"
        variants={CodingValiant}
        initial="initial"
        animate="active"
      />
    </svg>
  );
};

export default CodingSvg;

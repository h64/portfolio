import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: "100px" },
};

const MotionTest = ({ variant }: { variant: "hidden" | "visible" }) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      animate={variant}
      variants={variants}
    >
      Hello World
    </motion.div>
  );
};

export default MotionTest;

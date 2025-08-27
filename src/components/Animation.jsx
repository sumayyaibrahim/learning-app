import { motion } from "framer-motion";

function Animation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // start invisible, moved down
      animate={{ opacity: 1, y: 0 }}    // fade in + slide up
      transition={{ duration: 0.6, ease: "easeOut" }} // smooth animation
      className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl"
    >
      <h1 className="text-3xl  text-warning font-bold mb-4 text-center">
        LEARN ANYTHING
      </h1>
      <p className="text-gray-600 mb-4 pb-4 text-center text-success">
        Join our platform and start Earning knowledge today.
      </p>

      
    </motion.div>
  );
}

export default Animation;
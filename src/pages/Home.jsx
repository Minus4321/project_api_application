import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
};

export default Home;

// All animated divs need to be wrapped in 'motion.div'
// And remember to import framer motion
// Did the same to 'Grid' in 'Cuisine' page
// For animations to work, we need to do some other things, refer to 'Pages'

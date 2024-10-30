import { motion } from 'framer-motion';
import { FaGamepad, FaCode } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Header() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={controls}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4">Mohamed Shiha</h1>
          <div className="flex space-x-2">
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
              <FaGamepad className="text-3xl" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
              <FaCode className="text-3xl" />
            </motion.div>
          </div>
        </motion.div>
        <motion.p 
          className="text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Engineer | Game Developer
        </motion.p>
      </div>
    </motion.header>
  );
}

export default Header; 
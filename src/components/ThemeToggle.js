import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-700 text-xl" />
      )}
    </motion.button>
  );
}

export default ThemeToggle; 
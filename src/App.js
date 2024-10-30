import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-dark-bg dark:text-dark-text transition-colors duration-200">
        <ThemeToggle />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { motion } from 'framer-motion';
import { FaUserTie, FaGamepad, FaCode, FaDownload } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="py-16 bg-white dark:bg-dark-card"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FaUserTie className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          <motion.div 
            className="md:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="/Portfolio/assets/images/profile.jpg" 
                alt="Mohamed Shiha"
                className="rounded-lg shadow-lg w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg mb-6 dark:text-gray-300">
              A passionate Game Developer and Software Engineer with extensive experience in both game and web development. 
              I specialize in creating immersive gaming experiences using Unity and Unreal Engine, having contributed to major titles 
              like PGA Tour 2K23 and KSP2, along with several other AAA games under NDA. My expertise extends to full-stack web development, 
              where I leverage modern technologies to build scalable applications. With a proven track record in both game development studios 
              and independent projects, I thrive on tackling complex technical challenges and am constantly exploring new technologies to 
              enhance user experiences.
            </p>
            <div className="flex space-x-4 mb-6">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaGamepad className="text-2xl text-blue-600 mr-2" />
                <span className="dark:text-gray-300">Game Development</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode className="text-2xl text-blue-600 mr-2" />
                <span className="dark:text-gray-300">Software Engineering</span>
              </motion.div>
              <motion.a
                href="/Portfolio/assets/docs/cv.docx"
                download="Mohamed_Shiha_CV.docx"
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;

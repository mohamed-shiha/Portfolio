import { motion } from 'framer-motion';
import { FaGamepad, FaShoppingCart, FaMosque, FaFutbol, FaExternalLinkAlt} from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const professionalProjects = [
  {
    title: "PGA Tour 2K23",
    description: "Led UI development for this major gaming title",
    icon: <FaGamepad className="text-2xl text-blue-600" />,
    image: "/Portfolio/assets/images/pga-tour.jpg"
  },
  {
    title: "KSP2",
    description: "Developed new UI systems and features",
    icon: <FaGamepad className="text-2xl text-blue-600" />,
    image: "/Portfolio/assets/images/ksp2.jpg"
  },
  {
    title: "Goner",
    description: "Implemented AI systems. Game is currently in development and not yet available to the public.",
    icon: <FaGamepad className="text-2xl text-blue-600" />
  }
];

const personalProjects = [
  {
    title: "Shopping List App",
    description: "A practical shopping list application built for personal use",
    icon: <FaShoppingCart className="text-2xl text-blue-600" />,
    link: "https://shopping-list-app-ms89.azurewebsites.net/"
  },
  {
    title: "Prayer Time Calculator",
    description: "Static web app for calculating prayer times",
    icon: <FaMosque className="text-2xl text-blue-600" />,
    link: "https://mohamed-shiha.github.io/WASAT_MosquePrayersApp/"
  },
  {
    title: "Foosball Team Maker",
    description: "Unity WebGL app for team selection",
    icon: <FaFutbol className="text-2xl text-blue-600" />,
    link: "https://justagamerforfun.itch.io/foosball-team-maker"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function ProjectCard({ project, isPersonal }) {
  const [showPreview, setShowPreview] = useState(false);
  
  const handleImageError = (imagePath) => {
    console.error(`Image not found: ${imagePath}. Please check if the image exists in public${imagePath}`);
  };

  return (
    <>
      <motion.div
        variants={projectVariants}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }}
        className="bg-gray-50 dark:bg-dark-card p-6 rounded-lg shadow-md transition-all duration-300"
      >
        {project.image && (
          <div 
            className="mb-4 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setShowPreview(true)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              onError={() => handleImageError(project.image)}
            />
          </div>
        )}
        <div className="flex items-center mb-4">
          {project.icon}
          <h4 className="text-xl font-bold ml-3 dark:text-white">{project.title}</h4>
        </div>
        <p className="dark:text-gray-300">{project.description}</p>
        {isPersonal && (
          <a 
            href={project.link} 
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 flex items-center mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Project
          </a>
        )}
      </motion.div>

      {/* Image Preview Modal */}
      {showPreview && project.image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </>
  );
}

function Projects() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 bg-gray-50 dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Note: Due to Non-Disclosure Agreements (NDAs), several major gaming projects I've contributed to cannot be listed here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isPersonal={false} />
          ))}
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isPersonal={true} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects; 
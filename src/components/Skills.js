import { motion } from 'framer-motion';
import { FaUnity, FaReact, FaNodeJs, FaGithub, FaCode } from 'react-icons/fa';
import { SiUnrealengine, SiCsharp, SiCplusplus } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'Unity', icon: <FaUnity />, level: 90 },
  { name: 'Unreal Engine', icon: <SiUnrealengine />, level: 85 },
  { name: 'C#', icon: <SiCsharp />, level: 90 },
  { name: 'C++', icon: <SiCplusplus />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
  { name: 'Git', icon: <FaGithub />, level: 85 },
  { name: 'Problem Solving', icon: <FaCode />, level: 90 },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center mb-2">
        <div className="text-2xl text-blue-600 mr-3">{skill.icon}</div>
        <span className="font-semibold">{skill.name}</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full">
        <motion.div 
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="py-16 bg-gray-50 dark:bg-dark-card"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;

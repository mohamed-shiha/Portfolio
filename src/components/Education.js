import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

function Education() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center dark:text-white">
          <FaGraduationCap className="mr-3 text-blue-600" />
          Education & Achievements
        </h2>
        
        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-bold dark:text-white">Bachelor's Degree in Computer Science</h3>
          </div>
          <p className="dark:text-gray-300">Games Development - First Class Honors</p>
        </div>

        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaTrophy className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-bold dark:text-white">Awards</h3>
          </div>
          <p className="dark:text-gray-300">Governing Body Award</p>
        </div>
      </div>
    </section>
  );
}

export default Education; 
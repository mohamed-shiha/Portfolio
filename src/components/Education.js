import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

function Education() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaGraduationCap className="mr-3 text-blue-600" />
          Education & Achievements
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-bold">Bachelor's Degree in Computer Science</h3>
          </div>
          <p>Games Development - First Class Honors</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaTrophy className="text-2xl text-blue-600 mr-3" />
            <h3 className="text-xl font-bold">Awards</h3>
          </div>
          <p>Governing Body Award</p>
        </div>
      </div>
    </section>
  );
}

export default Education; 
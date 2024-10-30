import { FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          <FaCopyright className="mr-2" /> 
          {new Date().getFullYear()} Mohamed Shiha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 
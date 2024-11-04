import { FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <p className="flex items-center">
            <FaCopyright className="mr-2" /> 
            {new Date().getFullYear()} Mohamed Shiha. All rights reserved.
          </p>
          <img 
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmohamed-shiha.github.io%2FPortfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false"
            alt="Visitor Count"
            className="opacity-75 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
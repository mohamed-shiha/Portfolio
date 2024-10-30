import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-blue-600 mr-3" />
              <div>
                <strong>Email:</strong>
                <a 
                  href="mailto:mohamedshiha89@gmail.com" 
                  className="text-blue-600 hover:underline ml-2"
                >
                  mohamedshiha89@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaLinkedin className="text-2xl text-blue-600 mr-3" />
              <div>
                <strong>LinkedIn:</strong>
                <a 
                  href="https://www.linkedin.com/in/mohamed-shiha/" 
                  className="text-blue-600 hover:underline ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mohamed-shiha
                </a>
              </div>
            </div>
          </div>
          
          {/* LinkedIn Badge */}
          <div 
            className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="medium" 
            data-theme="light" 
            data-type="VERTICAL" 
            data-vanity="mohamed-shiha" 
            data-version="v1"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact; 
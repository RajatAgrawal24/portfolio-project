import { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Code2, 
  Mail, 
  Phone, 
  BookOpen, 
  Award, 
  // Briefcase, 
  GraduationCap, 
  Code, 
  Database, 
  // GitBranch, 
  Wrench, 
  // MessageSquare,
  ChevronUp,
  Loader2
} from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-purple-500 mx-auto" />
          <h2 className="mt-4 text-xl font-semibold text-white">Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 border-b border-purple-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Rajat Agrawal
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('achievements')} className="hover:text-purple-400 transition-colors">Achievements</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-purple-400 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-4 md:px-0">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              RAJAT AGRAWAL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Full Stack Developer</p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="mailto:rag7731@gmail.com" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-glow-purple">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+916265177162" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-glow-purple">
                <Phone className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-glow-purple">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-glow-purple">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-glow-purple">
                <Code2 className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
            <div className="flex items-start">
              <BookOpen className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 mt-1" />
              <p className="text-gray-300 leading-relaxed">
                Passionate Full Stack Developer specializing in Web Development with proficiency in Java and strong knowledge of
                Data Structures & Algorithms. A 5-Star Coder on HackerRank in Java, Solved 350+ Quality Problems at
                Leetcode, skilled in working in collaborative environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">JewelShop: E-Commerce Application</h3>
                <p className="text-gray-400 mb-4">MERN, Stripe</p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Fully responsive with authentication and secure payment integration.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Implemented a shopping cart, order tracking, and advanced search functionality.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Github</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">College Admission Portal</h3>
                <p className="text-gray-400 mb-4">HTML, Bootstrap, Node.js, Express.js, MongoDB</p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Designed and developed a college admission system with secure login and student profile management.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Implemented email-based authentication and token-based security.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Created an admin panel to track, manage, and review applications.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Github</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sustainiser (Kriyeta Hackathon)</h3>
                <p className="text-gray-400 mb-4">MERN Stack</p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Contributed to the development of Sustainiser, a platform promoting sustainable environmental development.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Built using the MERN stack (MongoDB, Express.js, React, Node.js) for a robust and responsive experience.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Github</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CollabLab: A Contribution-Based Project Sharing Platform</h3>
                <p className="text-gray-400 mb-4">MERN Stack</p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Collaborated with a team to brainstorm, develop, and present CollabLab, a resource-sharing platform.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Utilized the MERN stack to build a responsive and user-friendly web platform.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-center mb-4">
                <Code2 className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>ReactJS</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Other Tools */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-center mb-4">
                <Wrench className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>WebSockets</li>
                <li>Stripe API</li>
                <li>Cloudinary</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500 text-center">
              <Award className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Full Stack Web Development in MERN</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500 text-center">
              <Award className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Structures and Algorithms in JAVA</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500 text-center">
              <Award className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Infosys SpringBoot DBMS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Achievements
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <h3 className="text-xl font-semibold mb-2">Finalist at KRIYETA 3.0 (National Level Hackathon)</h3>
              <p className="text-gray-400">Acropolis College Of Technology, Indore</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <h3 className="text-xl font-semibold mb-2">Third Runner Up at IDEATHON Codictive 2.0 (State Level Hackathon)</h3>
              <p className="text-gray-400">Bansal College, Bhopal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-start">
                <GraduationCap className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Bachelor Of Technology in Computer Science Engineering</h3>
                  <p className="text-gray-400 mb-2">Lakshmi Narain College of Technology, Bhopal, M.P.</p>
                  <p className="text-gray-300">CGPA: 8.58</p>
                  <p className="text-gray-400">2022 – 2026*</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-start">
                <GraduationCap className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">12th CBSE Board</h3>
                  <p className="text-gray-400 mb-2">New Delhi Public School, Morena, M.P.</p>
                  <p className="text-gray-300">Percentage: 82.4</p>
                  <p className="text-gray-400">2021</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
              <div className="flex items-start">
                <GraduationCap className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">10th CBSE Board</h3>
                  <p className="text-gray-400 mb-2">New Delhi Public School, Morena, M.P.</p>
                  <p className="text-gray-300">Percentage: 92.6</p>
                  <p className="text-gray-400">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-400 mr-3" />
                    <a href="tel:+916265177162" className="text-gray-300 hover:text-purple-400 transition-colors">
                      (+91) 6265177162
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-400 mr-3" />
                    <a href="mailto:rag7731@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      rag7731@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-purple-400 mr-3" />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-purple-400 mr-3" />
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                      Github Profile
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Rajat Agrawal. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Layout from "./components/Layout";

// Placeholder Page Components
const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        A modern React application styled with Tailwind CSS, providing a clean and responsive user experience.
      </p>
    </div>
    
    <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Explore Our Platform</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28"><rect width="256" height="256" fill="none"/><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="173.46 128 156 98.33 188.59 106.4 210.39 80 213.06 114.65 244 128 213.06 141.35 210.39 176 188.59 149.6 156 157.67 173.46 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            <h3 className="text-xl font-medium text-gray-700 ml-3">Premium Features</h3>
          </div>
          <p className="text-gray-600">Discover our premium features designed to enhance your productivity. Explore <Link to="/features" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">our Features page</Link> to learn more.</p>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28"><rect width="256" height="256" fill="none"/><rect x="21.49" y="82.75" width="213.02" height="90.51" rx="8" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="64" x2="160" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="96" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="128" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            <h3 className="text-xl font-medium text-gray-700 ml-3">Comprehensive Documentation</h3>
          </div>
          <p className="text-gray-600">Access comprehensive documentation to get started quickly and make the most of our application.</p>
        </div>
      </div>
    </div>
    
    <div className="rounded-lg overflow-hidden shadow-2xl mt-12">
      <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3MDkwMDl8&ixlib=rb-4.1.0&q=80&w=1080" alt="vibrant abstract technology background with glowing lines" />
    </div>
  </div>
);

const FeaturesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Core Features</h1>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-4 text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="128" y1="152" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M64,152a64,64,0,0,1,64-64,65.75,65.75,0,0,1,7.05.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224.19,112.38a104.48,104.48,0,0,1,1.91,74.25,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.77,103.77,0,0,1,38.66,7.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">Blazing Fast</h2>
        <p className="text-gray-600 text-center">Experience unparalleled speed and performance, ensuring your tasks are completed efficiently.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-4 text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">Secure Platform</h2>
        <p className="text-gray-600 text-center">Your data is protected with top-tier security measures and encryption protocols.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-4 text-purple-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><rect x="64" y="24" width="128" height="208" rx="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="64" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="192" x2="192" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">Responsive Design</h2>
        <p className="text-gray-600 text-center">Access our app seamlessly on any device, anytime, anywhere, with a fully responsive interface.</p>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">About Our Mission</h1>
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl">
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        We are a passionate team of developers, designers, and innovators dedicated to creating cutting-edge web solutions. Our mission is to empower users by providing intuitive, powerful, and aesthetically pleasing tools that solve real-world problems and enhance productivity.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        This application serves as a demonstration of a foundational React frontend template, meticulously crafted with Tailwind CSS for elegant styling and optimal responsiveness. It provides a clean, well-structured starting point for a wide variety of web development projects, emphasizing modern best practices.
      </p>
       <div className="mt-8 rounded-lg overflow-hidden shadow-lg aspect-video">
         <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3MDkwMTZ8&ixlib=rb-4.1.0&q=80&w=1080" alt="diverse team collaborating energetically in a bright modern office space" />
       </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h1>
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-xl mx-auto">
      <form>
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="John Doe" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="you@example.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[calc(100vh-200px)]"> {/* Adjust min-height based on header/footer approx height */}
    <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
    <p className="text-3xl font-semibold text-gray-800 mb-6">Oops! Page Not Found.</p>
    <p className="text-gray-600 max-w-md mx-auto mb-10">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <Link to="/" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-md hover:shadow-lg">
      Go Back Home
    </Link>
    <div className="mt-12 max-w-sm mx-auto rounded-lg overflow-hidden">
      <img src="https://images.unsplash.com/photo-1740085838427-3dab06bd60f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3MDkwMjF8&ixlib=rb-4.1.0&q=80&w=1080" alt="whimsical illustration of a lost robot looking at a map" />
    </div>
  </div>
);


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Layout>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

import { logo } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="w-full min-h-screen bg-gradient-to-br from-[#F4FDD9] to-[#E4FFE1] flex flex-col">
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/60 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        </div>
        <div className="flex gap-4">
          <Link 
            to="/" 
            className="px-4 py-2 rounded-full border border-[#6A8D73] text-[#6A8D73] font-medium hover:bg-[#6A8D73] hover:text-[#F4FDD9] transition-all"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 rounded-full border border-[#6A8D73] text-[#6A8D73] font-medium hover:bg-[#6A8D73] hover:text-[#F4FDD9] transition-all"
          >
            About
          </Link>
          <Link 
            to="/how-it-works" 
            className="px-4 py-2 rounded-full border border-[#6A8D73] text-[#6A8D73] font-medium hover:bg-[#6A8D73] hover:text-[#F4FDD9] transition-all"
          >
            How It Works
          </Link>
        </div>
      </nav>

      <div className="flex flex-col justify-center items-center flex-grow px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#6A8D73] leading-tight drop-shadow-md">
          Intelligent Article Summarizer with <br className="max-md:hidden" />
          <span 
            className="bg-gradient-to-r from-[#6A8D73] to-[#F0A868] bg-clip-text text-transparent"
          >
            OpenAI GPT-4
          </span>
        </h1>
        <h2 className="mt-6 text-lg sm:text-xl text-[#6A8D73]/80 max-w-3xl leading-relaxed font-medium">
          This AI-based article summarizer leverages the power of OpenAI GPT-4 to help you quickly and easily condense lengthy content into concise, meaningful summaries.
        </h2>
      </div>
    </header>
  );
};

export default Hero;

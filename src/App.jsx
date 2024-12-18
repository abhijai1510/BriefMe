import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Demo from './components/Demo';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import BackButton from './components/BackButton';
import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          <BackButton />
          <Routes>
            <Route path="/" element={<><Hero /><Demo /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;

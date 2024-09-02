import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import About from './component/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
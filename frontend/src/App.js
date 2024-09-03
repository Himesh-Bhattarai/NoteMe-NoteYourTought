import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Notes from './component/Notes';
import Alert from './component/Alert';

function App() {
  return (
    <>
      <Navbar />
      <Alert/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
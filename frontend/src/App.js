import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Notes from './component/Notes';
import Alert from './component/Alert';
import NoteState from './context/notes/NoteState'; // Import NoteState

function App() {
  return (
    <NoteState> {/* Wrap components with NoteState */}
      <Navbar />
      <Alert />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </NoteState>
  );
}

export default App;

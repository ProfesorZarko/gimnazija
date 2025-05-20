import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Odeljenje from './pages/Odeljenje';
import Maturanti from './pages/Maturanti';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/odeljenje" style={{ marginLeft: '1rem' }}>Odeljenje</Link>
        <Link to="/maturanti" style={{ marginLeft: '1rem' }}>Maturanti</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/odeljenje" element={<Odeljenje />} />
        <Route path="/maturanti" element={<Maturanti />} />
      </Routes>
    </div>
  );
}

export default App;

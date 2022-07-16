import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/temp" element={<Landing />} /> */}
      </Routes>
    </>
  );
}

export default App;

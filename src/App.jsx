import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

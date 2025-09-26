import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../shared/ui/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../shared/ui/Footer';
import Home from '../pages/home';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

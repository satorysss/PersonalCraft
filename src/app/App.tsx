import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "@/pages/Gallery";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";

import { UpButton } from '@/shared/ui/buttons/ui/upButton';

import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";



function App() {

  return (
    <Router>
      <div className="App min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>       
        <UpButton/>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;

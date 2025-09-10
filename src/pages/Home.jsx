import About from './components/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Neon from './components/NeonAbout'
import Offer from './components/OfferSIC'
import Whychoose from './components/Why'
import Lastelement from './components/Lastelement'

function Home() {
  return (
        <div>
        <About/>
        <Neon/>
        <Offer/>
        <Whychoose/>
        <Lastelement/>
        </div>
  );
}

export default Home;

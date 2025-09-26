import About from '../../shared/ui/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Neon from '../../shared/ui/NeonAbout'
import Offer from '../../shared/ui/OfferSIC'
import Whychoose from '../../shared/ui/Why'
import Lastelement from '../../shared/ui/Lastelement'

function Index() {
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

export default Index;

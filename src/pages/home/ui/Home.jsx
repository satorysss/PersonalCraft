import About from '../../../shared/ui/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Neon from '../../../shared/ui/NeonAbout'
import Offer from '../../../shared/ui/OfferSIC'
import Whychoose from '../../../shared/ui/Why'
import Lastelement from '../../../shared/ui/Lastelement'
import Reveal from "@/shared/ui/Reveal";


function Home() {
  return (
    <div>
        <Reveal>
            <About/>
        </Reveal>

        <Reveal>
            <Neon/>
        </Reveal>

        <Reveal>
            <Offer/>
        </Reveal>

        <Reveal>
            <Lastelement/>
        </Reveal>
    </div>
  );
}

export default Home;

import 'bootstrap/dist/css/bootstrap.min.css';

import Reveal from "@/shared/ui/Reveal/Reveal";
import About from "@/widgets/About";
import NeonAbout from "@/widgets/NeonAbout";
import Offer from "@/widgets/HomeOffer";
import HomeLastElement from "@/widgets/HomeLastElement";



function Home() {
  return (
    <div>
        <Reveal>
            <About/>
        </Reveal>

        <Reveal>
            <NeonAbout/>
        </Reveal>

        <Reveal>
            <Offer/>
        </Reveal>

        <Reveal>
            <HomeLastElement/>
        </Reveal>
    </div>
  );
}

export default Home;

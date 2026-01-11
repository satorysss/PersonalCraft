import 'bootstrap/dist/css/bootstrap.min.css';
import About from "@/shared/ui/About";
import Offer from "@/shared/ui/HomeOffer";
import HomeLastElement from "@/shared/ui/HomeLastElement";
import Reveal from "@/shared/ui/Reveal/Reveal";
import NeonAbout from "@/shared/ui/NeonAbout";



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

import Reveal from "@/shared/ui/Reveal/Reveal";
import TopGallery from "@/shared/ui/TopGallery";
import GalleryCard from "@/shared/ui/GalleryCard";



export default function Gallery() {
    return (
        <div className="container">
            <h2 className="text-center fs-1 text-light mt-5">Галлерея сгенерированных изображений </h2>
            <div className="text-white  mt-5 row ">

                    <TopGallery/>

                <Reveal>
                    <GalleryCard/>
                </Reveal>


            </div>

        </div>
    );
}

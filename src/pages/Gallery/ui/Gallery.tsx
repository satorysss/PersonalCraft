import Reveal from "@/shared/ui/Reveal/Reveal";
import GalleryCard from "@/shared/ui/GalleryCard";
import {storeGal} from "@/stores/store";
import TopGallery from "@/widgets/TopGallery";



export default function Gallery() {
    const incrementVisible = storeGal((state) => state.visibleIncrement)

    return (
        <div className="container text-center ">
            <h2 className=" fs-1 text-light mt-5">Галлерея сгенерированных изображений </h2>

                    <TopGallery/>

                <Reveal>
                    <GalleryCard/>
                </Reveal>

            <div className="container text-center mt-5 mb-5">
                <button className="getbutton " onClick={incrementVisible}>Загрузить еще</button>
            </div>
        </div>
    );
}

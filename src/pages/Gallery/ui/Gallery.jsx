import Galleryy from "../../../entities/image/ui/Galleryitem";
import LeftPanelGallery from "@/shared/ui/LeftPanelGallery";
import Reveal from "@/shared/ui/Reveal";
export default function Gallery() {
    return (
        <div className="container">
            <h2 className="text-center fs-1 text-light mt-5">Галлерея сгенерированных изображений </h2>
            <div className="text-white  mt-5 row ">
                <Reveal>
                    <LeftPanelGallery/>
                </Reveal>
                <Reveal>
                    <Galleryy/>
                </Reveal>


            </div>

        </div>
    );
}

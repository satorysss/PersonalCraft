import Galleryy from "../../../entities/image/ui/Galleryitem";
import ConstructorModal from "../../../features/Constructor/ui/ConstructorModal";
export default function Gallery() {
    return (
        <div className="p-5">
            <h2 className="text-center fs-1 text-light mt-5">Галлерея сгенерированных изображений </h2>
            <div className="text-white text-left mt-5 row gap-5">

                <div className="col">
                    <div className="row gap-4">

                        <div className="col row leftPanelGallery1 ">
                            <div className="col row">
                                <div className="col">
                                    <p>отфильтровать по:</p>
                                </div>
                                <div className="col">
                                    <select name="" id="">
                                        <option value="">date</option>
                                        <option value="">likes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col"><input type="text" placeholder="serach"/></div>
                        </div>

                        <div className="col leftPanelGallery1 text-center">
                            <ConstructorModal/>
                        </div>
                    </div>

                <Galleryy/>
                </div>
            </div>
        </div>
    );
}

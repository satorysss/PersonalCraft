import {galleryy} from "@/shared/ui/images";

function ScrollText  () {
    return (
        <div className="carousel">
            <div className="scroll-text">
                {galleryy.map((img, i) => (
                    <img key={i} src={img.link} alt=""  />
                ))}
                {galleryy.map((img, i) => (
                    <img key={`dup-${i}`} src={img.link} alt=""  />
                ))}
            </div>

            <div className="scroll-text">
                {galleryy.map((img, i) => (
                    <img key={i} src={img.link} alt=""  />
                ))}
                {galleryy.map((img, i) => (
                    <img key={`dup2-${i}`} src={img.link} alt=""/>
                ))}
            </div>
        </div>


    );
}

export default ScrollText;
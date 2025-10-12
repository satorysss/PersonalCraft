import {galleryy} from "@/shared/images/images";

function ScrollText  () {
    return (
        <div className="carousel">
            <div className="scroll-text">
                {galleryy.map((img, i) => (
                    <img key={i} src={img.link} alt="" width="300" height="300" />
                ))}
                {galleryy.map((img, i) => (
                    <img key={`dup-${i}`} src={img.link} alt="" width="300" height="300" />
                ))}
            </div>

            <div className="scroll-text">
                {galleryy.map((img, i) => (
                    <img key={i} src={img.link} alt="" width="300" height="300" />
                ))}
                {galleryy.map((img, i) => (
                    <img key={`dup2-${i}`} src={img.link} alt="" width="300" height="300" />
                ))}
            </div>
        </div>


    );
};

export default ScrollText;
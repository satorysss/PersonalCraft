import { gallery } from "@/shared/ui/images/images";
import { storeGal } from "@/stores/store";

interface GalleryCardProps {
    src: string;
    name: string;
    likes: number;
}

export default function Gallery() {
    const visibleBlocks = storeGal((s) => s.value);

    return (
        <div className="gallery-grid mt-5">
            {gallery.slice(0, visibleBlocks).map((image) => (
                <GalleryCard
                    key={image.id}
                    src={image.src}
                    name={image.name}
                    likes={image.likes}
                />
            ))}
        </div>
    );
}

function GalleryCard({ src, name, likes }: GalleryCardProps) {
    return (
        <div className="galemain p-3 text-white">
            <img
                src={src}
                alt={name}
                className="gallery-img"
            />

            <div className="gallery-info row">
                <div className="likes cardItem col">
                    {likes}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        />
                    </svg>
                </div>

                <div className="name cardItem col">{name}</div>
            </div>

            <div className="copy cardItem">
                Copy Key
            </div>
        </div>
    );
}

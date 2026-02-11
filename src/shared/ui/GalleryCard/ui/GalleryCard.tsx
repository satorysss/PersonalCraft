import {CardStore, storeGal} from "@/stores/store";
import {useEffect} from "react";
interface GalleryCardProps {
    src: string;
    name: string;
    likes: number;
}

export default function Gallery() {
    const visibleBlocks = storeGal((s) => s.value);
    return (
        <div className="gallery-grid mt-5">
            {items.slice(0, visibleBlocks).map((image) => (
                <Card
                    key={image.id}
                    src={image.src}
                    name={image.author}
                    likes={image.likes}
                />
            ))}
        </div>

    );
}

function Card({ src, name, likes }: GalleryCardProps) {
    return (
        <div className="Gallery p-3 text-white">
            <img
                src={src}
                alt={name}
            />
            <div className="p-2 ">
                <div className="row m-auto gap-3">
                    <div className="likes Gallery-cardItem col ">
                        <span>{likes}</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                             className="ms-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                            />
                        </svg>
                    </div>

                    <div className="name Gallery-cardItem col">
            <div className=" row text-center justify-content-center align-items-center">
                <div className="row gap-3">
                    <div className="likes cardItem col">
                    <span className="m-1">{likes}</span> 
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

                    <div className="name cardItem col"><span>{name}</span></div> 
                    <div className="copy cardItem"><span>Copy Key</span></div>      
                </div>


            </div>


        </div>
                        <span>
                            {name}
                        </span>
                    </div>
                </div>

                <div className="Gallery-cardItem m-auto mt-2">
                    <span>
                        Copy Key
                    </span>
                </div>
            </div>
            </div>

    );
}

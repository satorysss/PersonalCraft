import { gallery } from "@/shared/images/images";



export default function Gallery() {
    return (
        <div className="row mt-3 text-center gap-5 p-5">
            {gallery.map((image) => (

                <GalleryItem
                    key={image.id}
                    src={image.src}
                    name={image.name}
                    likes={image.likes}
                />
            ))}
        </div>
    );
}

  function GalleryItem({ src, name, likes, keyProp }) {
    return (
      <div className="text-center col-custom galemain p-3 ">
        <div><img src={src} alt={name} width='200'/></div>
        <div className="row gap-1 p-3">
            <div className="col cardItem pt-2">
                {likes}
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                     className="bi bi-heart-fill ms-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>

            </div>
            <div className="col cardItem pt-2">{name}</div>
        </div>
          <div className="cardItem pt-2">{keyProp}<span>Copy Key</span></div>
      </div>
    );
  }




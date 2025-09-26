import { images } from "../../../shared/images/images.js";
  
  function GalleryItem({ src, name, likes, keyProp }) {
    return (
      <div className="text-center col galemain p-3">
        <div><img src={src} alt={name} /></div>
        <div className="row gap-1 p-3">
          <div className="col cardItem pt-2">👍 {likes}</div>
          <div className="col cardItem pt-2">{name}</div>
        </div>
        <div className="cardItem pt-2">{keyProp}</div>
      </div>
    );
  }


export default function Gallery() {
    return (
        <div className="galemain col p-5 mt-5 row gap-4">
            {images.map((image) => (
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
  
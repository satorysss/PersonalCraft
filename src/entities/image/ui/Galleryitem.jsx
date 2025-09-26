import { gallery } from "@/shared/images/images";



export default function Gallery() {
    return (
        <div className=" galemain row justify-content-left mt-3 gap-5">
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
      <div className=" text-center col galemain p-3 ">
        <div><img src={src} alt={name} width='250'/></div>
        <div className="row gap-1 p-3">
          <div className="col cardItem pt-2">👍 {likes}</div>
          <div className="col cardItem pt-2">{name}</div>
        </div>
        <div className="cardItem pt-2">{keyProp}</div>
      </div>
    );
  }




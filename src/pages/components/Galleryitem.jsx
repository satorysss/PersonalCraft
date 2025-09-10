const images = [
    { id: 1, src: "/images/img1.png", name: "Image 1", likes: 10, key: "key1" },
    { id: 2, src: "/images/img1.png", name: "Image 2", likes: 5,  key: "key2" },
    { id: 3, src: "/images/img1.png", name: "Image 2", likes: 5,  key: "key2" },
    { id: 4, src: "/images/img1.png", name: "Image 3", likes: 15,  key: "key3" },
    { id: 5, src: "/images/img1.png", name: "Image 1", likes: 10,  key: "key1" },
    { id: 6, src: "/images/img1.png", name: "Image 2", likes: 5,  key: "key2" },
    { id: 7, src: "/images/img1.png", name: "Image 2", likes: 5,  key: "key2" },
    { id: 8, src: "/images/img1.png", name: "Image 3", likes: 15,  key: "key3" },
  ];
  
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
              dislikes={image.dislikes}
              keyProp={image.key}
            />
          ))}
        </div>
    );
  }
  
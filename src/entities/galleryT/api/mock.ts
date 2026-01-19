import {GalleryI} from "@/entities/galleryT/model/types";
import img1 from "@/shared/ui/images/img1.png";
import img2 from "@/shared/ui/images/img2.png";
import img3 from "@/shared/ui/images/img3.png";
export const gallery: GalleryI [] = [
    {
        id: 1,
        src: img1,
        author: "Satory",
        likes: 10
    },
    {
        id: 2,
        src: img2,
        author: "Satory",
        likes: 10
    },
    {
        id: 3,
        src: img3,
        author: "Satory",
        likes: 10
    },
    {
        id: 4,
        src: img1,
        author: "Satory",
        likes: 610
    },
    {
        id: 5,
        src: img1,
        author: "Satory",
        likes: 101
    },
    {
        id: 6,
        src: img1,
        author: "Satory",
        likes: 10
    },
    {
        id: 7,
        src: img1,
        author: "Satory",
        likes: 102
    },
    {
        id: 8,
        src: img1,
        author: "Satory",
        likes: 123230
    },

];
export const getGallery = async (): Promise<GalleryI[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(gallery)
        }, 500)
    })
}
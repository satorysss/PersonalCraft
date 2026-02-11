export interface GalleryI {
    id: number;
    src: string;
    author: string;
    likes: number;
}
export interface InfoT {

}
export interface UserT {
    id: number;
    name: string;
    password: string;
    email: string;
    generationTry: number;
    allGenerationTry: number;

}
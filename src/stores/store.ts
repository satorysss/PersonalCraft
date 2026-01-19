import { create } from 'zustand'
import {GalleryI} from "@/entities/galleryT/model/types";
import {getGallery} from "@/entities/galleryT/api/mock";

interface GallleryStore {
    value: number,
    visibleIncrement: () => void,

}
interface CardStore {
    items: GalleryI[],
    load: () => Promise<void>
}

export const storeGal = create<GallleryStore>()((set) => ({
    value: 4,
    visibleIncrement: () => set((state) => ({ value: state.value + 4 }))

}))
export const CardStore = create<CardStore>()((set) => ({
    items: [],
    load: async () => {
        const data = await getGallery()
        set({ items: data })
    }
}))

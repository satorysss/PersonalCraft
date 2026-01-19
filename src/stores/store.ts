import { create } from 'zustand'
import {GalleryI} from "@/entities/galleryT/model/types";

interface GallleryStore {
    value: number,
    visibleIncrement: () => void,

}
interface CardStore {
    items: GalleryI[],
    setItems: (items: GalleryI[]) => void,
}

export const storeGal = create<GallleryStore>()((set) => ({
    value: 4,
    visibleIncrement: () => set((state) => ({ value: state.value + 4 }))

}))
export const CardStore = create<CardStore>()((set) => ({
    items: [],
    setItems: (items) => set({ items })

}))

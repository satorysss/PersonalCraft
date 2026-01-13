import { create } from 'zustand'

interface GallleryStore {
    value: number,
    visibleIncrement: () => void,
}

export const storeGal = create<GallleryStore>((set, get) => ({
    value: 4,
    visibleIncrement: () => set((state) => ({ value: state.value + 4 }))
}))

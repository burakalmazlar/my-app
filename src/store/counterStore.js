import create from 'zustand';
import { persist } from 'zustand/middleware';

const counterStore = create(persist((set) => ({
    count: 1,
    increase: () => (
        set((prev) => ({ count: prev.count + 1 }))
    ),
    reset: () => (
        set({ count: 0 })
    )
})));

export default counterStore;
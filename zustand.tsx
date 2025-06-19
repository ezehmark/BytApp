import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

// Initialize MMKV storage
const myStore = new MMKV();

const useStore = create(
  persist(
    (set) => ({
      dark: false,
      setDark: (day: boolean) => set({ dark: day }),
      toggleDark: () => set((state) => ({ dark: !state.dark })),
    }),
    {
      name: "myStore", // Storage key
      storage: {
        getItem: (key) => myStore.getString(key) || null,
        setItem: (key, value) => myStore.set(key, value),
        removeItem: (key) => myStore.delete(key),
      },
    }
  )
);

export default useStore;

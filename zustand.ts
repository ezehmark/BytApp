import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

interface User {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  picUrl: string;
  fromGoogle: boolean;
  agreedToTerms?: boolean;
  createdAt?: string;
  balance?: number;
  pin?: number;
}

interface StoreState {
  user: User | null;
  loggedIn: boolean;
  tpin: number;
  storedPlans: any;
  trxHistory: any[];
  setUser: (info: User | null) => void;
  setLoggedIn: (val: boolean) => void;
  addFund: (amt: number) => void;
  removeFund: (amt: number) => void;
  setBalance: (bal: number) => void;
  setPIN: (pin: number) => void;
  setTpin: (pin: number) => void;
  logOut: () => void;
  updateHistory: (data: any) => void;
  setTrxHistory: (data: any[]) => void;
  setStoredPlans: (data: any) => void;
}

// 🧠 MMKV instance
const storage = new MMKV();

// 🧩 MMKV adapter for Zustand
const zustandMMKVStorage = {
  setItem: (name: string, value: string) => {
    storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    storage.delete(name);
  },
};

// 💾 Zustand store
const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: {
        agreedToTerms: true,
        balance: 140438,
        bankDetails: {
          accountNumber: "8817651850",
          bankName: "Sterling BANK",
        },
        createdAt: "2025-08-06T01:25:19.627Z",
        email: "ezehmark@gmail.com",
        fromGoogle: false,
        fullName: "Engr. Mark",
        password: "Mark@BytPay5050",
        phone: "09036202766",
        pin: "5555",
        verified: true
      },
      loggedIn: false,
      tpin: 5555,
      storedPlans: null,
      trxHistory: [],

      setUser: (info) => {
        console.log("Setting user in store...");
        set({ user: info, loggedIn: true });
      },

      setLoggedIn: (val) => set({ loggedIn: val }),

      addFund: (amt) => {
        const current = get().user;
        if (current)
          set({ user: { ...current, balance: (current.balance ?? 0) + amt } });
      },

      removeFund: (amt) => {
        const current = get().user;
        if (current)
          set({ user: { ...current, balance: (current.balance ?? 0) - amt } });
      },

      setBalance: (bal) => {
        const current = get().user;
        if (current) set({ user: { ...current, balance: bal } });
      },

      setPIN: (pin) => {
        const current = get().user;
        if (current) set({ user: { ...current, pin } });
      },

      setTpin: (pin) => set({ tpin: pin }),

      logOut: () => {
        console.log("🔒 Logging out...");
        set({
          user: null,
          loggedIn: false,
          trxHistory: [],
          storedPlans: null,
        });
      },

      updateHistory: (data) =>
        set({ trxHistory: [data, ...get().trxHistory] }),

      setTrxHistory: (data) => set({ trxHistory: data }),

      setStoredPlans: (data) => set({ storedPlans: data }),
    }),
    {
      name: "BytPayData",
      storage: createJSONStorage(() => zustandMMKVStorage), // ✅ Use MMKV
      onRehydrateStorage: () => (state, error) => {
        console.log("🌀 Zustand hydration started...");
        if (error) console.error("❌ Hydration error:", error);
        else console.log("✅ Zustand hydration complete");
      },
    }
  )
);

export default useStore;

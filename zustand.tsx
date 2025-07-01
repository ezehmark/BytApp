import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";
import * as NavigationBar from "expo-navigation-bar";

import {io} from "socket.io-client";

// Initialize MMKV storage
const mmkvStore = new MMKV();
const socket = io("https://mybackend-oftz.onrender.com");
function getDateTime() {
  const date = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const thisMonth = months[date.getMonth()];
  const thisDay = date.getDate();
  const thisHour = date.getHours();
  const thisMinute = date.getMinutes().toString().padStart(2, "0");
  const meridian = thisHour >= 12 ? "pm" : "am";
  let hour = thisHour % 12;
  hour = hour ? hour : 12;
  return `${thisDay} ${thisMonth}, ${hour}:${thisMinute} ${meridian}`;
}

const useStore = create(
  persist(
    (set, get) => ({
	socket,
      inChats: [],
      setInChats: (data) => set({ inChats: data }),
      chats: [],
      setChats: (data) => set({ chats: [...get().chats,...data] }),
      updateChats:(d)=>set({chats:d}),
      dark: false,
      setDark: (value) => {set({ dark: value });mmkvStore.set("isDarkTheme",values)},
      toggleDark: () => set((state) => ({ dark: !state.dark })),
      handleNav: async () => {
        const isDark = get().dark;
        await NavigationBar.setBackgroundColorAsync(isDark ? "#131314" : "white");
        await NavigationBar.setButtonStyleAsync(isDark ? "light" : "dark");
      },
      typed:"",
      setType:(txt)=>set({typed:txt}),

      query:"",
      setQuery:(txt)=>set({query:txt}),
      dateNow:()=>{
	      const date = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const thisMonth = months[date.getMonth()];
  const thisDay = date.getDate();
  const thisHour = date.getHours();
  const thisMinute = date.getMinutes().toString().padStart(2, "0");
  const meridian = thisHour >= 12 ? "pm" : "am";
  let hour = thisHour % 12;
  hour = hour ? hour : 12;
  return `${thisDay} ${thisMonth}, ${hour}:${thisMinute} ${meridian}`;
},
id:null,
setId:(data)=>set({id:data}),
	ads:true,
closeAds:()=>set({ads:false}),
	toggleAds:()=>set(st=>({ads:!st.ads})),
	refinedChats:[],                                                                        
refineChats:(data)=>set({refinedChats:data}),
    }),
    {
      name: "myStore",
      storage: {
        getItem: (key) => {
          const value = mmkvStore.getString(key);
          try {
            return value ? JSON.parse(value) : null;
          } catch {
            return value;
          }
        },
        setItem: (key, value) => mmkvStore.set(key, JSON.stringify(value)),
        removeItem: (key) => mmkvStore.delete(key),
      },
	partialize:(state)=>{
    const{socket,handleNav,dateNow,...rest}=state;
    return rest}
    }
  )
);

export default useStore;

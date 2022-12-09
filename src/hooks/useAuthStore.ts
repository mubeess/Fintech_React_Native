import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import create from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  id?: string;

  setId: (id: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      id: undefined,

      setId: (id) => set(() => ({ id })),
    }),
    {
      name: "authState",
      getStorage: () => (Platform.OS === "web" ? localStorage : AsyncStorage),
    },
  ),
);

export default useAuthStore;

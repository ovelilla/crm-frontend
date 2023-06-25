import { create } from "zustand";

interface ThemeState {
    themeMode: "light" | "dark";
    setThemeMode: (themeMode: "light" | "dark") => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    themeMode: "light",
    setThemeMode: (themeMode) => set({ themeMode }),
}));

export default useThemeStore;

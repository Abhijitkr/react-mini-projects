import { useContext } from "react";
import { createContext } from "react"

export const ContextTheme = createContext({
    themeMode: " ",
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ContextThemeProvider = ContextTheme.Provider;

export default function useTheme() {
    return useContext(ContextTheme);
}
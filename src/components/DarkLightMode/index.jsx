import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function DarkLightMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="theme-container" data-theme={theme}>
      <h1>Change Theme</h1>
      <button onClick={handleTheme}>Change Mode</button>
    </div>
  );
}

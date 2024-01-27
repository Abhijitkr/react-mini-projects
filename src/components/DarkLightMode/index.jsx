import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function DarkLightMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="theme-container text-2xl font-bold" data-theme={theme}>
      <h1 className="m-10">Theme Changer Project</h1>
      <h2 className="mt-40">Change Theme</h2>
      <button onClick={handleTheme} className="font-semibold">
        Change Mode
      </button>
    </div>
  );
}

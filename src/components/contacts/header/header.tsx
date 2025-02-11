import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="flex justify-between items-center text-white bg-blue-500 px-6 py-2 rounded-b-full font-bold text-xl bg-gradient-to-t via-blue-400 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJzYrgFwoobhOUN7Y-fvH4h7Cg3a3iELTw&s)",
      }}
    >
      <div className="w-[40px]"></div>

      <div>وب اپلیکیشن مدیریت مخاطبین</div>

      <button
        onClick={handleThemeToggle}
        className={`p-1 rounded-full duration-300 transition-all cursor-pointer ${
          theme === "light" ? "bg-black" : "bg-white"
        }`}
      >
        {theme === "light" ? (
          <FiSun size={24} color="white" />
        ) : (
          <FiMoon size={24} color="black" />
        )}
      </button>
    </div>
  );
}

import { FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
  const handleThemeToggle = () => {};

  return (
    <div
      className="flex justify-between items-center text-white bg-blue-500 p-2 rounded-b-full font-bold text-xl bg-gradient-to-t via-blue-400 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJzYrgFwoobhOUN7Y-fvH4h7Cg3a3iELTw&s)",
      }}
    >
      <div className="w-[40px]"></div>

      <div>وب اپلیکیشن مدیریت مخاطبین</div>

      <button
        className={`ml-2 p-1 rounded-full duration-300 transition-all cursor-pointer`}
      >
        themetoggle
      </button>
    </div>
  );
}

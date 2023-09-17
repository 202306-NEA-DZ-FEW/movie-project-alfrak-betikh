import { useState, useEffect } from "react";

function DarkButton() {
  const [isDark, setIsDark] = useState(false);
  const [buttonText, setButtonText] = useState("🌙");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      setButtonText("🌙");
    } else {
      document.documentElement.classList.remove("dark");
      setButtonText("☀️");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <button
        onClick={toggleDark}
        className="bg-gray-200 dark:bg-gray-800 p-2 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DarkButton;

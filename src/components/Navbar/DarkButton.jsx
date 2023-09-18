import React, { useState, useEffect } from "react";

function DarkButton() {
  const [isDark, setIsDark] = useState(false);

  //   useEffect(() => {
  //     // Check if the window object is available (client-side)
  //     if (typeof window !== "undefined") {
  //       // Update the isDark state based on the user's machine media preferences
  //       setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  //     }
  //   }, []);

  useEffect(() => {
    // Update the data-theme attribute on the :root element
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <button
        onClick={toggleDark}
        className="bg-bkg p-2 pt-4 rounded transition-colors duration-300 ease-in-out lg:ml-5"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default DarkButton;

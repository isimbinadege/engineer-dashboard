import React from 'react'

function Navbar({ theme, toggleTheme }) {
    return (
          <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
      Developer Dashboard
    </h1>
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  </nav>
    )
}

export default Navbar

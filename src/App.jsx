import Navbar from "./components/Navbar";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;

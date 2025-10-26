import Navbar from "./components/Navbar";
import useTheme from "./hooks/useTheme";
import GitHubCard from "./components/GitHubCard";
import WeatherCard from "./components/WeatherCard";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />

     
      <main className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GitHubCard username="isimbinadege" />    
        <WeatherCard />                          
      </main>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import useTheme from "./hooks/useTheme";
import GitHubCard from "./components/GitHubCard";
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    
     <main className="p-4 grid gap-4 md:grid-cols-2">
        <GitHubCard username="PUT_YOUR_GITHUB_USERNAME_HERE" />
      </main>
</div>
  );
}

export default App;

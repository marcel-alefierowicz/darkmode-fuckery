import "./index.css";
import DarkMode from "./components/darkmode";

function App() {
  return (
    <div class="absolute h-screen bg-main w-screen dark:bg-main-gray">
      <div className="justify-center items-center h-screen flex">
        <DarkMode/>
      </div>
    </div>
  );
}

export default App;

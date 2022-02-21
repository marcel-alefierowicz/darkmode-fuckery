import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='flex'>
        <div class="absolute justify-center h-screen w-screen bg-main dark:bg-main-gray">
            <div className='flex items-center justify-center bg-transparent/5 dark:bg-transparent/20'>
                <Navbar />
            </div>
        </div>


    </div>
    
  );
}

export default App;

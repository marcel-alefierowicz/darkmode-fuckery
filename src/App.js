import "./index.css";
import Navbar from "./components/Navbar";
import horrror from "./horrror.png";

function App() {
  return (
    <div className='flex'>
        <div class="absolute justify-center h-screen w-screen bg-main dark:bg-main-gray">
            <div className='flex  justify-center bg-transparent/5 dark:bg-transparent/20'>
                <Navbar />
            </div>
            <div className='flex justify-center'>
              <div className='flex w-3/5 justify-center '>
                  <p> Hello MY name is Hightowert i veyrtf like smoke zis VERY Bnice</p>
                  <img src={horrror}/>
              </div>
            </div>
            
        </div>


    </div>
    
  );
}

export default App;

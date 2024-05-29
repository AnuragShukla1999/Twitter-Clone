import './App.css';
import Body from './components/Body';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
       <Body/>
       <Toaster/>
       <h5>hi world</h5>
    </div>
  );
}

export default App;

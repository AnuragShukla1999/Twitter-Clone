import './App.css';
import Body from './components/Body';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
       <Body/>
       <Toaster/>
       <h1>Hello guy I am here</h1>
    </div>
  );
}

export default App;

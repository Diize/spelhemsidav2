import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Spel1 from './components/Spel1Folder/Spel1';
import Spel2 from './components/Spel2Folder/Spel2';

function App() {
  return (
    <div className="App">
      
<Navbar/>

<Home/>
<Spel2/>
    </div>
  );
}

export default App;

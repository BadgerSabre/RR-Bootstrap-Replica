import './App.css';
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import StoreListing from './Components/StoreListing'

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Home/>
      <StoreListing/>
    </div>
  );
}

export default App;

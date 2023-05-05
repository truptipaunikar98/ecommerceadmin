import './App.css';
import Allroutes from './allroutes/Allroutes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-3 p-0'><Sidebar/></div>
        <div className='col-9'><Allroutes/></div>
      </div>
    </div>
  );
}

export default App;

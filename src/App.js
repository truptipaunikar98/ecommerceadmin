import './App.css';
import Navbar from './components/Navbar';
import Main from './Main/Main';
import Login from "./pages/Login"
function App() {
  return (
    <div className="">
      {
         localStorage.getItem("isLogin")? <><Navbar/>
         <Main/></> : <Login/> 
      }
    </div>
  );
}

export default App;

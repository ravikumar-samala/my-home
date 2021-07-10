import logo from './my-home-town.png';
import './App.css';
import { 
  useAppStore, 
  loggedInUserNameSelector, 
  setLoggedInUserNameSelector 
} from "./hooks/useAppStore";

function App() {
  const loggedInUserName = useAppStore(loggedInUserNameSelector);
  const setLoggedInUserName = useAppStore(setLoggedInUserNameSelector);
  
  const changeUserName = () => {
    const newName = "Random User " + Date.now()
    setLoggedInUserName(newName)
  }
  
  return (
    <div className="tableGrid">
      <div className="logo">
      <img src={logo} className="logoImg" alt="logo" />
      </div>
      <div className="container">
      <div className="figure">
        soem text
        <hr className="line"></hr>
      </div>
      <div className="figure">
        soem text
        <hr className="line"></hr>
      </div>
      </div>
      </div>
  );
}

export default App;

import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <h2>
          Logged in user - { loggedInUserName }
        </h2>
        <button onClick={() => changeUserName()} >Change user name</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

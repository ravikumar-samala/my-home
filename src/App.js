import logo from "./my-home-town.png";
import arrow from "./arrow.png";

import "./App.css";
import {
  useAppStore,
  loggedInUserNameSelector,
  setLoggedInUserNameSelector,
} from "./hooks/useAppStore";

function App() {
  const loggedInUserName = useAppStore(loggedInUserNameSelector);
  const setLoggedInUserName = useAppStore(setLoggedInUserNameSelector);

  const changeUserName = () => {
    const newName = "Random User " + Date.now();
    setLoggedInUserName(newName);
  };

  return (
    <div className="tableGrid">
      <div className="logo">
        <img src={logo} className="logoImg" alt="logo" />
      </div>
      <div className="container">
        <div className="figure">
          <h1>My Tours</h1>
          <hr className="line"></hr>
          <h1 className="caption">Manage your tours and scenes</h1><a href="#"><img src={arrow} className="arrow"></img></a>
        </div>
        <div className="figure">
          <h1>View Tours</h1>
          <hr className="line"></hr>
          <h1 className="caption">Manage your tours and scenes</h1><a href="#"><img src={arrow} className="arrow"></img></a>
        </div>
      </div>
    </div>
  );
}

export default App;

import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./components/Profile";
import JokeList from "./components/joke.jsx";

function App() {
  
  return (
    <>
      <Hello name="World" />
      <p>This is a Makers Academy video!</p>
      <img className="logo" src={makersLogo}></img>
      {/* <Profile /> */}
      <JokeList />
    </>
  );
}

export default App;
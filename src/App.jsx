import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./data/data-user-1/user.json";
function App() {
  return (
    <div className="App">
      <Profile {...userData}></Profile>
    </div>
  );
}

export default App;

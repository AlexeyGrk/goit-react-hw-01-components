import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import userData from "./data/data-user-1/user.json";
import statisticsData from "./data/data-statistical-2/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile {...userData}></Profile>
      <Statistics title="Upload stats" stats={statisticsData} />
    </div>
  );
}

export default App;

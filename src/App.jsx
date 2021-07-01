import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import userData from "./data/data-user-1/user.json";
import friends from "./data/data-friends-3/friends.json";
import statisticsData from "./data/data-statistical-2/statistical-data.json";
import FriendsList from "./components/Friends/FriendsList/FriendsList";

function App() {
  return (
    <div className="App">
      <Profile {...userData}></Profile>
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;

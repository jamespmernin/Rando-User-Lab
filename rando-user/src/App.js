import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserSummary from './UserSummary';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    const userUrl = "https://api.randomuser.me/"
    const getUser = async () => {
      const res = await axios.get(userUrl);
      setCurrentUser(res.data.results[0]);
    }
    getUser();
  }, []);
  return (
    <div className="App">
      <h1 className="App-header">
        Get a Random User!
      </h1>
      <UserSummary userData={currentUser} />
    </div>
  );
}

export default App;

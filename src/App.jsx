import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import user from './data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from './data/data.json';
import FriendList from './FriendList/FriendList';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import SectionText from './SectionText/SectionText';
export const App = () => {
  return (
    <>
      <SectionText text="1 - Профіль соціальної мережі" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <SectionText text="2- Секція статистики" />
      <Statistics title="Upload stats" stats={data} />

      <SectionText text="3 - Список друзів" />
      <FriendList friends={friends} />

      <SectionText text="4 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </>
  );
};
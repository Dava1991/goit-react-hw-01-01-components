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

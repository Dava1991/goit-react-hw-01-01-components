import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={css.item}>
    {isOnline ? (
      <span className={css.statusTrue}></span>
    ) : (
      <span className={css.statusFalse}></span>
    )}
    <img
      // className={css.avatar}
      src={avatar}
      alt={name}
      width="70"
      height="70"
    />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendListItem;
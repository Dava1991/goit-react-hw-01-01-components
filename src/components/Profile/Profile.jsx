import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.accent}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.accent}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.accent}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
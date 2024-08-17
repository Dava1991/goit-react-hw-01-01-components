import css from '../Statistics/Statistics.module.css';
// import data from '../Data/data.json';
const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title !== '' && title !== null && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
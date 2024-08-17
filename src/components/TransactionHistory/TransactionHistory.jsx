import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.tableTitle}>
        <th className={css.tablElement1}>Type</th>
        <th className={css.tablElement2}>Amount</th>
        <th className={css.tablElement3}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <tr
          className={(index + 1) % 2 === 0 ? css.tableColor1 : css.tableColor2}
          key={id}
        >
          <td className={css.tablElement1}>{type}</td>
          <td className={css.tablElement2}>{amount}</td>
          <td className={css.tablElement3}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
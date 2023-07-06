import styles from "./ResultTable.module.css";

const ResultTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => (
          <tr>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.yearlyContribution}</td>
            <td>{data.year}</td>
          </tr>
        ))}
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;

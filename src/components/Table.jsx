import transactions from "../transactions.json";

function Table() {
  return (
    <div>
      <table className="table w-full table-fixed">
        <thead>
          <tr className="table-header bg-pink-400 text-white text-center">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      </table>

      {transactions.map((transaction) => {
        return (
          <table className="table w-full table-fixed ">
            <tbody>
              <tr className="table-data text-center" key={transaction.id}>
                <td className="text-center">{transaction.type}</td>
                <td className="text-center">{transaction.amount}</td>
                <td className="text-center">{transaction.currency}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Table;

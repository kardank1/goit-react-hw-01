import TransactionHistoryStroke from "../TransactionHistoryStroke/TransactionHistoryStroke"
import css from "./TransactionHistory.module.css"
import clsx from "clsx";

export default function TransactionHistory({transactionHistory}){

    return(<table className={css.table}>
        <thead className={css.tableH}>
          <tr>
            <th className={css.tableHItem}>Type</th>
            <th className={css.tableHItem}>Amount</th>
            <th className={css.tableHItem}>Currency</th>
          </tr>
        </thead>
      
        <tbody>
           
          {transactionHistory.map((transaction, index)=>(
            <tr key={transaction.id} className={clsx(css.stroke, index%2===0 ? css.paired : css.unPaired)} >
                <TransactionHistoryStroke transaction={transaction} />
            </tr>
          ))}
          
        </tbody>
      </table>)
}
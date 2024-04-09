import css from "./TransactionHistoryStroke.module.css"

export default function TransactionHistoryStroke({transaction: {type, amount, currency}}){
    console.log(type, amount, currency)
    return(
        <>
            <td className={`${css.tableItem} ${css.firstItem}`}>{type}</td>
            <td className={css.tableItem}>{amount}</td>
            <td className={css.tableItem}>{currency}</td>
        </>
    )
}
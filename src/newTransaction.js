import React from 'react';

const NewTransaction = (props) => {
  return (
    <div className="newTransactions">
    <label>Name:</label><input className="transactionName" onChange={props.updateTransactionName}></input>
    <label>Amount:</label><input className="transactionAmount" onChange={props.updateTransactionAmount}></input>
    <button className="debit"onClick={props.transactionClick}>Debits</button><button className="deposit" onClick={props.transactionClick}>Deposits</button>
    </div>
  )
}

export default NewTransaction;

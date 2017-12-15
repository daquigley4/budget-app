import React from 'react';

const Transaction = (props) => {

  return (
    <div key={props.key}>{props.transactionType} of {props.amount} for {props.name}</div>
  )
}

export default Transaction;

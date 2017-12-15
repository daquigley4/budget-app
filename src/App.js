import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTransaction from './newTransaction';
import Transaction from './transaction';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    currentBalance: 100.01,
    transactions:
    [{
      id: 1,
      name: 'lunch',
      amount: 7.06,
      transactionType: 'debit'
    },
    {
      id: 2,
      name: 'Home Depot purchase',
      amount: 83.96,
      transactionType: 'debit'
    },
    {
      id: 3,
      name: 'yard sell',
      amount: 340.00,
      transactionType: 'deposit'
    }],
    newTransaction: {
      name: '',
      amount: 0.00,
      transactionType: ''
    }
  }

}



updateTransactionName = (event) => {
  const name = event.target.value

  this.setState({
    newTransaction : Object.assign(this.state.newTransaction, {name: name})
  })

  console.log("newTransaction state in updateTransaction", this.state.newTransaction);
}

updateTransactionAmount = (event) => {
  const amount = parseFloat(event.target.value)
  console.log("amount", amount);

  this.setState({
    newTransaction : Object.assign(this.state.newTransaction, {amount: amount})
  })

  console.log("newTransaction state in updateAmount", this.state.newTransaction);
}

transactionClick = (event) => {
  let currentBalance = this.state.currentBalance
  let newTransaction = Object.assign({}, this.state.newTransaction)
  let transactions = this.state.transactions.slice()

  newTransaction.transactionType = event.target.className
  newTransaction.id = transactions.length+1

  transactions.push(newTransaction)

  if (newTransaction.transactionType === 'deposit') {
    currentBalance += newTransaction.amount
  } else {
    currentBalance -= newTransaction.amount
  }

  newTransaction = {
    name: '',
    amount: 0,
    transactionType: ''
  }

  this.setState({ currentBalance, newTransaction, transactions })
}

  render() {
    console.log(this.state.transactions);
    const transactions = this.state.transactions.map((transaction,i) => <Transaction key={i} transactionType={transaction.transactionType} amount={transaction.amount} name={transaction.name}/>);ß

    return (
      <div className="App">
      {
        this.state.currentBalance ?
          <div className="showBalance">
            <h3>The account balance is: ${this.state.currentBalance}</h3>
            <NewTransaction updateTransactionName={this.updateTransactionName} updateTransactionAmount={this.updateTransactionAmount} transactionClick={this.transactionClick}/>
            <div className="transactions">
            {transactions}
            </div>
          </div> :
      <div className="error">
        <h3>ERROR: No current balance.</h3>
      </div>
    }
    </div>
    );
  }
}

export default App;

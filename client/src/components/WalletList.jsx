import React, { Component } from 'react';
import axios from 'axios';

const Wallet = props => (
    <tr>
       
        <td>{props.wallet.name}</td>
      
        <td>{props.wallet.balance}</td>
        <td>
            <button className="btn btn-success" onClick={
                () => { props.makeTransection(props.wallet._id) }}>
                Make Transection
            </button>
            &nbsp;
            <button className="btn btn-info" onClick={
                () => { props.viewTransection(props.wallet._id) }}>
                View Transection
            </button>
        </td>
    </tr>
)

class WalletList extends Component {
    constructor(props) {
        super(props);
        this.state = { walletArr: [] }
        this.makeTransection = this.makeTransection.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:4000/wallet/getWallet").then(response => {this.setState({
            walletArr : response.data.data
        })}).catch(err => console.log(err))
    }


    makeTransection(id) {
        localStorage.setItem("walletId",id)
        window.location = "/makeTransection";
    }
    viewTransection(id) {
        localStorage.setItem("transectionWalletId",id)
        window.location = "/walletTransection";
    }

    walletList() {
           return this.state.walletArr.map(currentWallet => {
               return <Wallet wallet={currentWallet} makeTransection={this.makeTransection} viewTransection={this.viewTransection} key={currentWallet._id} />
           })
    }
    render() {
        return (
            <div className="container">
                <h3>Wallet List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Balance</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.walletList()}
                    </tbody>
                </table>
                {this.state.walletArr.length == 0 ? <h4>No Record Found</h4> : ""}
            </div>
        )
    }

}



export default WalletList;
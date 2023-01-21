import React, { Component } from 'react';
import axios from 'axios';
import moment from "moment";
const Wallet = props => (
    <tr>
       
        <td>{props.wallet.amount}</td>
      
        <td>{props.wallet.type}</td>
        <td>{props.wallet.description}</td>
        <td>{props.wallet.transectionId}</td>
        <td>{moment(props.wallet.date ).format("MMMM Do YYYY, h:mm:ss a")}</td>
        
        
    </tr>
    
)

class WalletList extends Component {
    constructor(props) {
        super(props);
        this.state = { walletArr: [],totalAmount:0 }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/transect/"+ localStorage.getItem("transectionWalletId")).then(response => {this.setState({
            walletArr : response.data.data,
            totalAmount : response.data.data[0].walletId.balance
        })}).catch(err => console.log(err))
    }



    walletList() {
           return this.state.walletArr.map(currentWallet => {
               return <Wallet wallet={currentWallet} key={currentWallet._id} />
           })
    }
    render() {
        return (
           
            <div className="container">
                <h3>Wallet Transection List </h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Transection Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.walletList()}
                    </tbody>
                </table>
                {this.state.walletArr.length > 0 ? <h4>Wallet Amount - {this.state.totalAmount}</h4> : ""}
            </div>
            
        )
    }

}



export default WalletList;
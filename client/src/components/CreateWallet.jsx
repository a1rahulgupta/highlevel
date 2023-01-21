import React, { Component } from 'react';
import axios from 'axios';

class CreateWallet extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            balance: 0,
        }
       
        this.onChangeWalletName = this.onChangeWalletName.bind(this);
        this.onChangeBalance = this.onChangeBalance.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
    onChangeWalletName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeBalance(e) {
        this.setState({
            balance: e.target.value
        })
    }

    onSubmit(e) {
        console.log("Hi",e);
        e.preventDefault();
        const walletReq = {
            name : this.state.name,
           
            balance: this.state.balance,
           
        }
        console.log("Hello",walletReq);
        axios.post("http://localhost:4000/wallet/setup", walletReq).then(response => console.log(response));
        window.location = "/";
    }





    render() {
        return (

            <div className="container">
                <h3>
                    Create New Wallet
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Wallet Name :</label>
                        <input type="text" required className="form-control"
                            value={this.state.name} onChange={this.onChangeWalletName} />


                    </div>
                    <div className="form-group">
                        <label>Balance</label>
                        <input type="number" required className="form-control"
                            value={this.state.balance} onChange={this.onChangeBalance} />

                    </div>
                    
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create Wallet" className="btn btn-primary" />

                    </div>


                </form>


            </div>
        )
    }


}



export default CreateWallet;
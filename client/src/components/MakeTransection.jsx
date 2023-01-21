import React, { Component } from 'react';
import axios from 'axios';

class MakeTransection extends Component {
    constructor(props) {
        super();
        this.state = {
            amount: 0,
            description: "",
            type: "credit"
        }

        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onSubmit(e) {
        console.log("Hi", e);
        e.preventDefault();
        const transectionReq = {
            amount: this.state.amount,
            type: this.state.type,
            description: this.state.description,
        }
        console.log("Hello", transectionReq);
        axios.post("http://localhost:4000/transect/" + localStorage.getItem("walletId"), transectionReq).then(response => console.log(response));
        window.location = "/";
    }





    render() {
        return (

            <div className="container">
                <h3>
                    Make Transection
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Amount :</label>
                        <input type="number" required className="form-control"
                            value={this.state.amount} onChange={this.onChangeAmount} />


                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" required className="form-control"
                            value={this.state.description} onChange={this.onChangeDescription} />

                    </div>
                    <div className="form-group">
                        <label>
                            Type </label>
                                <select className="form-control" value={this.state.type} onChange={this.onChangeType}>
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                            </select>
                        

                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Transection" className="btn btn-primary" />

                    </div>


                </form>


            </div>
        )
    }


}



export default MakeTransection;
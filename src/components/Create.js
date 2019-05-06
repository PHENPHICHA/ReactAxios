import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeProcuctName = this.onChangeProductName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: ''
        }
    }
    onChangeProductName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`name is ${this.state.name} and price is ${this.state.price}`);
        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeProductName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type="text" className="form-control" value={this.state.price}  onChange={this.onChangePrice}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
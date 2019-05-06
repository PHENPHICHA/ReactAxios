import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Product</h3>
                <form>
                    <div className="form-group">
                        <label>Add Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
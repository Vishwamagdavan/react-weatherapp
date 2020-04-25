import React, { Component } from 'react'


 class Form extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                <input type="text" className="form-controm" name="city" autoComplete="off"></input>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-controm" name="country" autoComplete="off"></input>
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                <button className="btn btn-warning">Submit</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Form

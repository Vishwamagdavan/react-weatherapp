import React, { Component } from 'react'

class wheather extends Component {
    render() {
        return (
            <div className="container">
                <div className="cards">
                <h1>{this.props.city}</h1>
                <h5 className="py-4">
                <i className={`wi ${this.props.icon} display-1`}></i>
                </h5>
                <h1 className="py-2">{this.props.temp_celsius}&deg; C</h1>
                {minmaxTemp(this.props.temp_max,this.props.temp_min)}
                <h4 className="py-3">{this.props.description}</h4>
                </div>
            </div>
        )
    }
}



function minmaxTemp(min,max)
{
    return(
        <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
        </h3>
    )
}
export default wheather

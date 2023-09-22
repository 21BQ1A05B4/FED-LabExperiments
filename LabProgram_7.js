import React, { Component } from 'react'

export default class LabProgram_7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#ff00ff',
        }
    }

    // Color Handling starts from here

    redHandler = () => {
        this.setState({color:'#ff0000'});
    }

    greenHandler = () => {
        this.setState({color:'#00ff00'});
    }
    
    blueHandler = () => {
        this.setState({color:'#0000ff'});
    }

    render() {
        return (
        <div>
            <h1 style={{color:this.state.color}}>LabProgram_7</h1>
            <button type='button' onClick={this.redHandler}>RED</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button type='button' onClick={this.greenHandler}>GREEN</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button type='button' onClick={this.blueHandler}>BLUE</button>
        </div>
        )
    }
}

import React, { Component } from 'react'

export default class CounterClass extends Component {
    state = {
        count : 0,
    };
    incrementalHandler = () => {
        this.setState({count:this.state.count+1});
    };
    decrementalHandler = () => {
        this.setState({count:this.state.count-1});
    };
    render() {
        return (
        <div>
            <button type='button' onClick={this.incrementalHandler}><h1>+</h1></button>
            &nbsp; &nbsp; &nbsp;
            {this.state.count}
            &nbsp; &nbsp; &nbsp;
            <button type='button' onClick={this.decrementalHandler}><h1>-</h1></button>
        </div>
        );
    }
}

// export default CounterClass;

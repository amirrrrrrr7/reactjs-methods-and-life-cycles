import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            counter: props.initCounter
        }
    }

    render() {

        return (
        <div>
            {this.state.counter}
            <button onClick={ () => this.setState({counter: this.state.counter + 1})}>+</button>
            <button onClick={ () => this.setState({counter: this.state.counter - 1})}>-</button>
        </div>
        );
    }
}

export default Counter;
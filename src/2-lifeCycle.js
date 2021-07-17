import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state ={
            counter:0
        }
        console.log(props);
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromPops',props,state);
        if (state.counter % 2) {
            return { counter :state.counter + 1}
        }

        return null
    }

    componentDidMount(){
        console.log('componentDidMount');
       /* fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate',prevProps, prevState, snapshot);
        console.log('prevState: ',prevState,'newState: ',this.state);
        console.log('snapshot =======>',snapshot);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextState: ',nextState,'State: ',this.state);
        if (nextState.counter % 4 === 0){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate ==========>');
        console.log('prevState: ',prevState,'newState: ',this.state)
        return this.state.counter - prevState.counter
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.counter}
                <button onClick={ () => this.setState({counter: this.state.counter +1})}>
                Increase
                </button>
            </div>
        )
    }
}

export default LifeCycle
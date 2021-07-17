import React from 'react';

class App extends React.Component{
    state = {
        counter: 0,
        status: 0
    }

    render() {
        return (
            <div>

                <div>
                    Counter : {this.state.counter}
                </div>
                <div>
                    Status : {this.state.status}
                </div>
                <button
                onClick ={() => this.setState(state => ({counter: state.counter +1}))}
                >
                Change counter
                </button>
                <button
                onClick ={() => this.setState(state => ({status: state.status +1}))}
                >
                Change Status
                </button>
                <hr />

                <MyPureComponent counter={this.state.counter}/>
                <MyComponent counter={this.state.counter}/>
            </div>
        )
    }

}

class MyPureComponent extends React.PureComponent{

    render() {
        console.log('MyPureComponent render');
        return (
            <div>
                MyPureComponent {this.props.counter}
            </div>
        )
    }
}

class MyComponent extends React.Component{

    render() {
        console.log('MyComponent render');
        return (
            <div>
                MyComponent {this.props.counter}
            </div>
        )
    }
}

export default App;
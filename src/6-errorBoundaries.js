import React from 'react';

export default class Parent extends React.Component {

    render() {
        return (
            <div>
                <ErrorBoundaries>
                    <Child />
                </ErrorBoundaries>
            </div>
        )

    }
}

class ErrorBoundaries extends React.Component {

    state = {hasError : false}

    static getDerivedStateFromError(error) {
        console.log('My error: ==========>', error);
        return {
            hasError : true
        }

    }

    render() {

        if (this.state.hasError){
            return'Sorry!!! Your app crashed'
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Child extends React.Component {
    state = {counter: 0}

    render() {
        if (this.state.counter === 4) {
            throw new Error('App Crashed')
        }
        return (
            <div>
                Child: {this.state.counter}
                <button onClick={ () => this.setState({counter: this.state.counter +1})}>
                    Increase
                </button>
            </div>
        )
    }
}

// this code work in product mode
import React from 'react';

class CreateRef extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            showSearchBox : false
        }
        
        this.textInput = React.createRef()
    }

    activeSearchBox () {
        this.setState({showSearchBox: true},() =>{
            console.log(this.textInput.current);
            this.textInput.current.focus();
        })
    }

    render() {
        return(
            <div>
                {this.state.showSearchBox &&
                <input ref={this.textInput} type="text" />}
                <button onClick={() => this.activeSearchBox()}>
                    Search
                </button>
            </div>
        )
    }
}

export default CreateRef
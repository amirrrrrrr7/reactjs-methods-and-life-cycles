import React, {Component} from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>
                    {this.props.name}
                </h1>
            </div>
        )
    }
}

Title.defaultProps = {
    color : 'black',
    name : 'frameWork'
}
export default Title
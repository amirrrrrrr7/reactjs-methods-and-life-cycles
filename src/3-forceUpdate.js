import React from 'react'

class ForceUpdate extends React.Component {

    getRandom() {
        this.forceUpdate() 
    }

    shouldComponentUpdate(nextProps,nextState,nextContext){
        return false
    }

    render() {
        return (
            <div>
                ForceUpdate
                <hr/>
                {Math.random()}
                <button onClick={ () =>this.getRandom() }>
                    get random
                </button>
            </div>
        )
    }
}

export default ForceUpdate
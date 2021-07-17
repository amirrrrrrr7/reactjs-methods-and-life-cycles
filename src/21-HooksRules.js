import {useState} from 'react'

function App(props) {

    // function func () {
    //     const [count, setCount] = useState(0)
    // }
    //
    // if (true) {
    //     const [count, setCount] = useState(0)
    // }
    //
    // for (let i = 0; i < 5; i++ ) {
    //     const [count, setCount] = useState(0)
    // }

    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
            <button
            onClick = { () => this.setCount(count => count + 1)}
            >
                +
            </button>
        </div>
    )
}

export default App
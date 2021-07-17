import {useEffect, useState} from 'react'

function App () {
    const [show,setShow] = useState(true)

    return(
        <>
            <button
                onClick ={() => {
                    setShow(!show)
                }}
            >
                {show? 'Hide' : 'Show'}
            </button>
            {show && <Counter />}
        </>
    )
}

function Counter () {

    const [counter,setCounter] = useState(0)

    const [users,setUsers] = useState([])

    // CDM , CDU ,CWU
    // useEffect (() => {
    //    const timeoutId = setTimeout(() => {
    //         setCounter(counter +1)
    //     },1000)
    //
    //     // CWU
    //     return () => {
    //         console.log('component will unMount', counter)
    //         clearTimeout(timeoutId)
    //     }
    // },[counter])

    useEffect(() => {

        const controller = new AbortController ()

        const signal = controller.signal

        fetch('https://jsonplaceholder.typicode.com/users',{signal})
            .then(response => response.json())
            .then(json => setUsers(json))
        return () => {
            controller.abort()
        }
    },[])

    return(
        <div>
            {counter}
            <hr />
            <ol>
            {users.map(user =><li key={user.id}>{user.name}</li>)}
            </ol>
        </div>
    )
}

function UseEffect () {

    const [count,setCount] = useState(0)
    const [state,setState] = useState(0)

    // CDM , CDU
    useEffect(() => {
        console.log('salam');
    },[count,state])

    console.log('hi');

    return(
        <div>
            HI
            <hr />
            {count}
            <button
            onClick = {() => setCount(count +1)}>
                +
            </button>
            <hr />
            {state}
            <button
                onClick = {() => setState(state +1)}>
                +
            </button>
        </div>
    )
}

// export default UseEffect
// export default Counter
export default App
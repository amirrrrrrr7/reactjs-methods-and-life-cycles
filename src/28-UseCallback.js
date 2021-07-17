import {useEffect, useState, useCallback} from 'react'
function App() {

    // const [count,setCount] = useState(0)
    //
    // useEffect(() => {
    //     const intervalId = setInterval(() => setCount(count => count +1),2000)
    //
    //     return () => clearInterval(intervalId)
    // })

    // incorrect
    // const focusRef = function (node) {
    //     console.log('node ==>', node)
    //     node && node.focus();
    // }

    const focusRef = useCallback(node => {
        console.log('node ==>', node)
        node && node.focus();
    }, [])

    const [height, setHeight] = useState(0)

    const heightRef = useCallback(node => {
        node && setHeight(node.getBoundingClientRect().height)
    }, [])

    return (
        <div>
            {/*count: {count}*/}
            <h1 ref={heightRef}>Hello</h1>
            <h2>Pixel: {Math.round(height)}</h2>
            <hr />
            <input type="text" ref={focusRef} />
        </div>
    )
}

export default App
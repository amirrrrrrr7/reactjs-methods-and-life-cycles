import React,{useState, useEffect, useMemo} from 'react'

const data = [
    {id: 0, title:'ali', ParentId: null},
    {id: 1, title:'ali', ParentId: 0},
    {id: 2, title:'ali', ParentId: 0},
    {id: 3, title:'ali', ParentId: 1},
    {id: 4, title:'ali', ParentId: 1}
]

function nest(data) {
    return data
}

function App() {
    const [show, setShow] = useState()

    return (
        <div>
            {show && <UseMemo />}
            <button onClick={() => setShow(show => ! show)}>
                {show? 'hide' : 'show'}
            </button>
        </div>
    )
}

function UseMemo() {

    const [count,setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => setCount(count => count +1),1000)

        return () => clearInterval(intervalId)
    })

    const value = useMemo(() => {
        console.log(count)
        return (9999n ** 9999n).toString()
    }, [])

    return (
        <div>
            count = {count}
            <hr />
            {value}
        </div>
    )
}

export default React.memo(App) // Pure component
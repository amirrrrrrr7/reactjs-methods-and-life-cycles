import {useState ,useEffect} from 'react'

function Counter () {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>{
            console.log('salam');
            setCounter(counter => counter +1)
        },1000)

        return () => {
            console.log('unMount');
            clearInterval(intervalId)
        }

    },[])

    return counter
}

export default Counter
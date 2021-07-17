import {useState} from 'react'

// function App () {
//
//     const [userName, setUserName] = useState ('')
//     const [password, setPassword] = useState ('')
//
//     return (
//         <div>
//             <input type= "text"
//                    placeholder= "UserName"
//                    value= {userName}
//                    onChange= {e => {setUserName(e.target.value)}}
//             />
//
//             <br />
//
//             <input type="text"
//                    placeholder="password"
//                    value={password}
//                    onChange={e => {setPassword(e.target.value)}}
//             />
//         </div>
//     )
// }

function App () {

    const userName = useForm()
    const password = useForm()

    return (
        <div>
            <input type= "text"
                   placeholder= "UserName"
                   {...userName}
            />

            <br />

            <input type="text"
                   placeholder="password"
                   {...password}
            />
        </div>
    )
}

function useForm(defaultValue = '') {
    const [value, setValue] = useState (defaultValue)

    return {
        value,
        onChange: e => setValue(e.target.value)
    }
}

export default App;
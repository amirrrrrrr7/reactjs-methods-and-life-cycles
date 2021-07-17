import {useContext} from 'react'
import {Redirect, useHistory, useLocation} from 'react-router-dom'
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

function Login() {

    const theme = useContext(ThemeContext)
    const {login, authenticated} = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()

    console.log('login =>', history);
    console.log('location =>', location);

    function signIn() {
        const {oldPath} = location.state || {oldPath: '/'}

        login()
        history.push(oldPath)
    }

    // if (authenticated) {
    //     return <Redirect to={"/"} />
    // }

    return (

        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>

            {authenticated && <Redirect to={"/"} />}

            <button onClick={() => signIn()} style={{cursor:'pointer'}}>Login </button>

        </article>
    )
}

export default Login
import {useContext} from 'react'
import ThemeContext from './ThemeContext'

function Contact(props) {

    const theme = useContext(ThemeContext)

    console.log(props);
    return(
        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1> Contact Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </article>
    )
}

export default Contact
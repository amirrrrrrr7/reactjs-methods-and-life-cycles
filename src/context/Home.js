import {useContext} from 'react'
import ThemeContext from './ThemeContext'

function Home() {

    const theme = useContext(ThemeContext)

    return(
        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1> My home Page</h1>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </article>
    )
}

export default Home
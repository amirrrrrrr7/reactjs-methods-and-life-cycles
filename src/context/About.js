import {useContext} from 'react'
import { useLocation } from 'react-router-dom'
import ThemeContext from './ThemeContext'

function About(props) {

    const theme = useContext(ThemeContext)
    const location = useLocation()

    console.log(location.pathname === '/about');

    console.log(props);
    return(
        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1> About Page</h1>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

        </article>
    )
}

export default About
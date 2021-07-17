import {useContext} from 'react'
import ThemeContext from './ThemeContext'

function NotFound(props) {

    const theme = useContext(ThemeContext)

    console.log(props);
    return(
        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1> 404 NotFound Page</h1>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

        </article>
    )
}

export default NotFound
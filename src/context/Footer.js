import React from 'react'
import ThemeContext from './ThemeContext'

// no access to two context in this mode

class Footer extends React.Component{

    render() {
        return(
            <footer style={{border: 'solid 1px', margin: '1em', padding: '1em', ...this.context}}>
                <h2>My Footer</h2>
            </footer>
        )
    }
}

// like as sidebar but outside class
Footer.contextType = ThemeContext

export default Footer
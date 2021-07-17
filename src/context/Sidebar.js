import React from 'react'
import {NavLink} from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import './sidebar.css'


// no access to two context in this mode

class Sidebar extends React.Component {

    static contextType = ThemeContext

    render() {
        console.log(this.context);
        return(
            <aside style={{flex: 1, border: 'solid 1px', margin: '1em',
                padding: '1em', ...this.context
            }}>
                <h4>My Sidebar</h4>
                <ul>
                    <li>
                        <NavLink exact to="/"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/post/1"> Post 1 </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/post/2"> Post 2 </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/post/3"> Post 3 </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"> Contact </NavLink>
                    </li>
                    <UserContext.Consumer>
                        {({authenticated}) =>
                        authenticated &&
                            <li>
                                <NavLink to="/profile"> My profile </NavLink>
                            </li>
                        }
                    </UserContext.Consumer>
                </ul>
            </aside>
        )
    }
}

export default Sidebar
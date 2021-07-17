import {useContext} from 'react'
import {Redirect, Route, useLocation} from 'react-router-dom'
import UserContext from "./UserContext";

function PrivateRoute({children, ...props}) {

    const {authenticated} = useContext(UserContext)
    const location = useLocation()
    console.log(location);

    if (authenticated) {
        return <Route {...props}>
            {children}
        </Route>
    }

    return <Redirect to={{pathname: '/login', state: {oldPath: location.pathname}}} />

}

export default PrivateRoute
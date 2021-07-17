import {useContext} from 'react'
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

function Profile() {

    const theme = useContext(ThemeContext)
    const {user} = useContext(UserContext)

    return (

        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1>My Profile Page</h1>
            <p>
                Name: {user.name}
                <hr />
                City: {user?.address?.city}
                {/*City: {user.address?user.address.city: ""}*/}
            </p>
        </article>
    )
}

export default Profile
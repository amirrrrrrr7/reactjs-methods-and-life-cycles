import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import cookie from 'js-cookie'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import NotFound from  './NotFound'
import Login from './Login'
import Profile from './Profile'
import PrivateRoute from './PrivateRoute'
import Post from './Post'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'

function App() {

    const [theme, setTheme] = useState(themes.light)
    const [user, setUser] = useState({})
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    // const history = useHistory() History is EMPTY

    useEffect(() => {
        const token = cookie.get('token')
        console.log(token);
        if(token) {
            getUser()
        }
    },[])

    function getUser() {
        setLoading(true)
        // fetch('api/users')
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(result => {
                setUser(result)
                setAuthenticated(true)
            })
            .finally(() => setLoading(false))
    }

    function login() {
        setLoading(true)
        // fetch('api/login')
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(result => {
                setUser(result)
                setAuthenticated(true)
                cookie.set('token', 'mytoken', {expires: 7})
            })
            .finally(() => setLoading(false))
    }

    function logout() {
        setUser({})
        setAuthenticated(false)
        cookie.remove('token')

    }

    if (loading) {
        return 'loading ...........'
    }

    return(
        <div>
            {/*{loading && 'loading ......'}*/}
            <BrowserRouter>
                <UserContext.Provider value={{user,authenticated, login, logout}}>
                    <ThemeContext.Provider value={theme}>
                        <div>
                            {
                                theme === themes.light ?
                                    <button onClick={() => setTheme(themes.dark)}>Dark</button> :
                                    <button onClick={() => setTheme(themes.light)}>Light</button>
                            }
                        </div>
                        <Header />
                        <section style={{display: 'flex'}}>
                            <Sidebar />
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/about" component={About} />
                                <Route path="/login" component={Login} />
                                {/*{ authenticated ? <Route path="/profile" component={Profile} /> : <Login /> }*/}
                                <PrivateRoute path="/profile" component={Profile} />
                                <Route path="/post/:id" component={Post} />

                                {/*<Route path="/mamad">*/}
                                {/*    mamad*/}
                                {/*</Route>*/}

                                <Route path="/contact" render={(props) => <Contact {...props} /> } />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </section>
                        <Footer />
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App
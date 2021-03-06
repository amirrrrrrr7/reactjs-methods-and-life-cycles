import React from 'react'

class Form extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeUsername(e){
        this.setState({username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
        this.setState({
            username:'',
            password:''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text"
                               value={this.state.username}
                               onChange={this.handleChangeUsername}
                        />
                    </label><br />
                    <label>
                        password:
                        <input type="text"
                               value={this.state.password}
                               onChange={this.handleChangePassword}
                        />
                    </label><hr />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

class AdvanceForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleChangeInput(e){
        console.log(e.target.value , e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
        this.setState({
            username:'',
            password:''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text"
                               name="username"
                               value={this.state.username}
                               onChange={this.handleChangeInput}
                        />
                    </label><br />
                    <label>
                        password:
                        <input type="text"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChangeInput}
                        />
                    </label><hr />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default AdvanceForm;
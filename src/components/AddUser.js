import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addUser } from '../actions/UserActions'


class AddUser extends Component {
    state = {
        name: ""
    }

    componentDidMount() {
        console.log('user bileşeni eklendi')
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.name)
    }

    componentDidUpdate(prevState) {
        console.log('AddUser bileşeni güncellendi', prevState)
        // this.setState(prevState =>({
        //     arrayvar : [...prevState.arrayvar]
        // }))
    }
    changeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    <input className="form-control mb-2" type="text" name="name"
                        onChange={this.changeHandler}
                        placeholder="Kullanıcı adı" />
                    <button className="btn btn-outline-success btn-block">Kaydet</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (name)=>{dispatch(addUser(name) )}
    }
}

export default connect(null, mapDispatchToProps)(AddUser);
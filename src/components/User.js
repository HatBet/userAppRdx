import React, { Component } from 'react'
import '../App.css'


import {connect} from 'react-redux'
import {changeUserState, deleteUser} from '../actions/UserActions'


class User extends Component {

    componentWillUnmount() {
        console.log('Bileşen çıkarıldı')
    }
    deleteHandler=()=>{
        this.props.deleteUser(this.props.users.name)
    }
    render() {
        console.log(this.props)
        const   changeHandler= (e) => {
            // console.log("user bileşeni" , e.target.value, users.id)
            this.props.changeUserState (e.target.value, users.id)
        }
        const { users } = this.props;
        return (
            <div className="card bg-light text mb-3">
                <div className="card-body ">
                    <button onClick={this.deleteHandler} className="btn btn-sm btn-outline-danger" style={{ position: "absolute", right: "15px" }} >Sil</button>
                    <h3 className="card-title">User: {users.name}</h3>
                    <h3 className="card-subtitle" > Durum: <span className={users.state}>{users.state}</span> </h3>
                    <select className="form-control mb-1" name="state" id="state" onChange={changeHandler} value={users.state} >
                        <option value="online">online</option>
                        <option value="offline">offline</option>
                        <option value="busy">busy</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    //dispatch metodu için yapılan tanımlama, propslara yönlendirmek amacıyla
    return{
        deleteUser : (name)=>{dispatch(deleteUser(name))},
        changeUserState: (state,id) =>{dispatch(changeUserState(state,id))}
    }
}

export default connect(null,mapDispatchToProps)(User);
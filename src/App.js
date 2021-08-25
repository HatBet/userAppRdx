import { Component } from 'react';
import './App.css'
import AddUser from './components/AddUser';
import UserList from './components/UserList';

import {connect} from 'react-redux'

class App extends Component {
  state = {
    users: [
      { id: 0, name: "Hatice", state: "online" },
      { id: 1, name: "Betül", state: "offline" },
      { id: 2, name: "Hatice", state: "busy" }
    ],

  }


  // deleteMethod = (id) => {
  //   //id' ye uygun filtreler ve id'si eşit olmayanları listeler
  //   let tUsers = this.state.users.filter(us => {
  //     return us.id !== id
  //   })
  //   this.setState({
  //     users: tUsers
  //   })
  // }

  // addMethod = (name) => {
  //   // console.log("App modül içerisinde", name)
  //   //[...arrayadi,nesne] ifadesi yazıldığında ilgili arraydeki nesne çağırılır
  //   let id = this.state.users.length + 1;
  //   let user = {
  //     name: name,
  //     state: 'online',
  //     id: id
  //   }

  //   let tUsers = [...this.state.users, user]
  //   this.setState({
  //     users: tUsers,
  //     idx: id + 1
  //   })
  // }

  // stateChange = (e, el) => {
  //   this.setState({ states: el, id: e })
  
  //   //değiştirmek istenilen değişkeni algılıyor. Ancak son halini aatamıyor.
  //   console.log("id:", e, "states:", el)
    

  // }

  stateChange = (data) =>{
    // console.log(data.state, data.id)
    let tUsers = this.state.users.map(us =>{
      if(us.id === data.id){
        us.state=data.state
      }
      return us;
    })
    this.setState({
      users:tUsers
    })
  }

  render() {
    const {users} = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" >
            <UserList users={users} deleteMethod={this.deleteMethod} stateChange={this.stateChange} />
            <hr />
            <AddUser  />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(App) ;

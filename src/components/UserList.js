import User from './User'

const UserList = ({ users}) => {
  if (users.length > 0 ) {
    return users.map(users => {
      return <User users={users} key={users.id}  />
    })
  } else {
    return (
      <div class="alert alert-danger" role="alert" >
        Kullanıcı bulunamadı.
      </div>)
  }
}

export default UserList;





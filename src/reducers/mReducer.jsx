const initialState = {
  users: [
    { id: 0, name: "Hatice", state: "online" },
    { id: 1, name: "Betül", state: "offline" },
    { id: 2, name: "Hatice", state: "busy" },
  ],
};

const mReducer = (state = initialState, action) => {
 // console.log(action);

  //DELETE_USER
  if (action.type === "DELETE_USER") {
    let tUsers = state.users.filter((us) => {
      return us.name !== action.name;
    });
    return {
      ...state,
      users: tUsers,
    };
  }

  //ADD_USER
  if (action.type === "ADD_USER") {
    let id = state.users.length + 1;
    let users = {
      name: action.name,
      state: "online",
      id: id,
    };
    return {
      id: users.id + 1,
      users: [...state.users, users],
    };
  }

  //update user 

  if (action.type === "CHANGE_USER_STATE") {
    console.log(action.id, action.state)
    let tUsers = state.users.map(us =>{
        if(us.id === action.id){
          us.state=action.state
        }
        return us;
      })
    return {
        ...state,
        users: tUsers,
      };
  }
  return state;
};
export default mReducer;

export default function reducer(state, action) {
  console.log(action.type, " action ", action.payload);

  switch (action.type) {
    case "ADD":
      return [
        {
          title: action.payload,
          completed: false,
          id: Date.now(),
          userId: 1,
        },
        ...state,
      ];
    case "EDIT":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.todo };
        } else {
          return todo;
        }
      });
    case "DELETE": {
      return [...action.payload];
    }
    case "COMPLETED": {
      console.log(action.payload, "payload ");
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }

    default:
      return state;
  }
}

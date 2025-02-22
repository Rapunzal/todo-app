export default function reducer(state, action) {
  console.log(action.type, " action ", action.payload);
  console.log(state, " state----");
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

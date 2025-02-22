export default function reducer(state, action) {
  console.log(action.type, " action ", action.payload);
  console.log(state, " state----");
  switch (action.type) {
    case "ADD":
      return [
        {
          title: action.payload,
          completed: false,
          id: state.length + 1,
          userId: 1,
        },
        ...state,
      ];
    case "DELETE": {
      return [...action.payload];
    }
    case "COMPLETED": {
      console.log(action.payload, "payload ");
      let newState = [...state];
      newState[action.payload - 1].completed =
        !newState[action.payload - 1].completed;
      return [...newState];
    }

    default:
      return state;
  }
}

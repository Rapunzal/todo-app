export default function reducer(state, action) {
  console.log(action.type, " action ", action.payload);
  console.log(state, " state----");
  switch (action.type) {
    case "ADD":
      return [
        { title: action.payload, completed: false, id: 1, userId: 1 },
        ...state,
      ];
    case "DELETE": {
      return [...action.payload];
    }
    case "COMPLETED": {
      console.log(action.payload, "payload ");
      return [...state, action.payload];
    }

    default:
      return state;
  }
}

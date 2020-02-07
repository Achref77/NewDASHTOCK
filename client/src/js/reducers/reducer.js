const initialState = {
  liste: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-liste":
      return { ...state, liste: action.payload };
  }

  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        liste: state.liste.map((el, id) =>
          id === action.payload.id ? { ...el, title: action.payload.task } : el
        )
      };

    default:
      return state;
  }
};
export default Reducer;
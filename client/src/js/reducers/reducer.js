const initialState = {
  contacts: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-CONTACT":
      return { ...state, contacts: action.payload };

    default:
      return state;
  }
};
export default Reducer;

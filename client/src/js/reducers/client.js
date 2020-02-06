const initialState = {
  clients: []
};

const Clients = (state = initialState, action) => {
  switch (action.type) {
    case "GET-CLIENT":
      return { ...state, clients: action.payload };
  }

  switch (action.type) {
    case "UPDATECLIENT":
      return {
        ...state,
        clients: state.clients.map((el, id) =>
          id === action.payload.id ? { ...el, title: action.payload.task } : el
        )
      };

    default:
      return state;
  }
};
export default Clients;

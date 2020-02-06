const initialState = {
  fournisseurs: []
};

const Fournisseurs = (state = initialState, action) => {
  switch (action.type) {
    case "GET-FOURNISSEUR":
      return { ...state, fournisseurs: action.payload };
  }

  switch (action.type) {
    case "UPDATEFOURNISSEUR":
      return {
        ...state,
        fournisseurs: state.fournisseurs.map((el, id) =>
          id === action.payload.id ? { ...el, title: action.payload.task } : el
        )
      };

    default:
      return state;
  }
};
export default Fournisseurs;

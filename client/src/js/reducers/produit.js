// const initialState = {
//   produits: []
// };

// const Produits = (state = initialState, action) => {
//   switch (action.type) {
//     case "GET-PRODUIT":
//       return { ...state, produits: action.payload };
//   }

//   switch (action.type) {
//     case "UPDATEPRODUIT":
//       return {
//         ...state,
//         produits: state.produits.map((el, id) =>
//           id === action.payload.id ? { ...el, title: action.payload.task } : el
//         )
//       };

//     default:
//       return state;
//   }
// };
// export default Produits;

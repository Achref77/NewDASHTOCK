import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GETliste,
  UPDATE,
  LOAD_SUCCESS
} from "../constants/action-types";

import jwt_decode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  loading: false,
  user: [
    {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: []
    }
  ]
};
const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: false,
        loading: false
      };
    case LOGIN_SUCCESS:
      // const role = jwt.decode("role", payload.token).user.role[0];
      localStorage.setItem("token", payload.token);
      localStorage.setItem("role", payload.role);
      localStorage.setItem("password", payload.password);
      var decoded = jwt_decode(payload.token);
      console.log("decoded", decoded);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false
      };

    // default:
    //   return state;
    //////////////////////////////////////////////////////////
    case GETliste:
      return { ...state, user: action.payload };

    case UPDATE:
      return {
        ...state,
        liste: state.user.map((el, id) =>
          id === action.payload.id ? { ...el, title: action.payload.task } : el
        )
      };
    default:
      return state;
  }
};
export default auth;

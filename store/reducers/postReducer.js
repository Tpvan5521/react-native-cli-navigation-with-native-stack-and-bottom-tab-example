import { postTypes } from "../actionTypes/actionType"

const initialState = {
  pending: false,
  posts: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

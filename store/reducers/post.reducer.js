import { postTypes } from "../actionTypes"

const initialState = {
  pending: false,
  posts: [],
  error: null,
  post: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case postTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        post: action.payload.post,
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        post: null,
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

import { postTypes } from "../actionTypes/actionType";

export const fetchPostsRequest = () => ({
  type: postTypes.FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (
  payload
) => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload
});

export const fetchPostsFailure = (
  payload
) => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload
});

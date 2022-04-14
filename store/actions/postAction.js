import { postTypes } from "../actionTypes/actionType";

export const fetchPostsRequest = () => ({
  type: postTypes.FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = (
  payload
) => ({
  type: postTypes.FETCH_POSTS_SUCCESS,
  payload
});

export const fetchPostsFailure = (
  payload
) => ({
  type: postTypes.FETCH_POSTS_FAILURE,
  payload
});

export const fetchPostRequest = (payload) => ({
  type: postTypes.FETCH_POST_REQUEST,
  payload
});

export const fetchPostSuccess = (
  payload
) => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload
});

export const fetchPostFailure = (
  payload
) => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload
});

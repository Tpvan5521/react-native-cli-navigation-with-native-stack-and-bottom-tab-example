import { GET_ALL_POSTS, GET_POST, COMMENT_ON_POST, CREATE_POST } from './actionType'

export function getAllPostsAction() {
    return {
        type: GET_ALL_POSTS
    }
}

export function getPostAction(postSlug) {
    return {
        type: GET_POST,
        payload: postSlug
    }
}

export function createPostAction(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function commentOnPostAction(comment, post, user) {
    return {
        type: COMMENT_ON_POST,
        payload: {
            comment,
            post,
            payload
        }
    }
}
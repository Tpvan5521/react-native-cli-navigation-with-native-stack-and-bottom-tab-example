import { GET_ALL_POSTS, GET_POST, COMMENT_ON_POST, CREATE_POST } from './actionType'

let initialPostState = {
    posts: [],
    post: {}
}

const postReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {}
    }
}

export default postReducer
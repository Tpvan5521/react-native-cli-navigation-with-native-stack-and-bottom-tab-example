import axios from "axios";

const URL = "https://95a6-113-161-93-146.ap.ngrok.io/api"

const customAxios = axios.create({
    baseURL: URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})

export async function getPosts() {
    let posts = null
    await customAxios
        .get(`${URL}/posts`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": ""
            }
        })
        .then(res => res.data)
        .then(res => {
            posts = res.data
        })
        .catch(err => console.log(err))
    return posts
}

export async function getPostBySlug(postSlug) {
    let post = null
    await customAxios
        .get(`${URL}/posts/${postSlug}`, {
            headers: {
                "Content-Type": "application/json" 
            }
        })
        .then(res => res.data)
        .then(res => {
            post = res.data
        })
        .catch(err => console.log(err))
    return post
}
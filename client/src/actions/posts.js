import * as api from '../api';

//Actions creators
export const getPosts = () => async (dispatch) => { //TODO: research what really happen here
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log({error_X9: error.message});   
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}
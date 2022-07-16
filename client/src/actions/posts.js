import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants/actionsTypes';

//Actions creators
export const getPosts = () => async (dispatch) => { //TODO: research what really happen here
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log({error_X9: error.message});   
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log({post});
    
    try {
        const { data } = await api.createPost(post);
        console.log({data});
        
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post ) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {    
    try {
        await api.deletePost(id);
        
        dispatch({ type: DELETE,  payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    console.log({id});
    
    try {
        const { data } = await api.likePost(id);
        console.log({data});
        
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_POST } from '../constants/actionsTypes';

//Actions creators
export const getPost = (id) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPost(id);
        console.log({data});
        
        dispatch({ type: FETCH_POST, payload: { post: data }});
        dispatch({type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}


export const getPosts = (page) => async (dispatch) => { //TODO: research what really happen here
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        console.log({data});
        
        dispatch({ type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING });
    } catch (error) {
        console.log({error_X9: error.message});   
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        console.log({data});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log({error});
        
    }
}

export const createPost = (post, history) => async (dispatch) => {
    console.log({post});
    
    try {
        dispatch({type: START_LOADING });
        const { data } = await api.createPost(post);
        history.push(`/posts/${data._id}`);
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

export const commentPost = (value, id) => async (dispatch) => {
    try{
        await api.comment(value, id);
    }catch(error){
        
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
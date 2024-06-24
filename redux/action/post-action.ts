import { Dispatch } from "@reduxjs/toolkit";
import { postStoreType } from "../interfaces";
import { 
    SET_TITLE,
    SET_BODY,
    CREATE_POST,
    CHANGE_INPUT_VALUE
 } from "@/redux/type/post-type";
import axios from "axios";
import { Toaster } from "@/app/components/toaster";

 export const changeInputValue = (name: string, value: any) => (dispatch: Dispatch) => {
    let data = {
        name: name,
        value: value
    }
    dispatch({type: CHANGE_INPUT_VALUE, payload: data})
 }

 export const createPost = (post: postStoreType) => async (dispatch: Dispatch) => {
    let response = {
        status   : false,
        message  : "",
        data     : {},
        isLoading: true
    }

    dispatch({ type: CREATE_POST, payload: response });

    await axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then((res) => {
        response.status = true;
        response.isLoading = false;
        response.message = "Post Created Successful!";
        response.data =  res.data;
        Toaster('success', response.message);
        dispatch({ type: CREATE_POST, payload: response });
    })
    .catch((error) => {
        response.status = false;
        response.isLoading = false;
        response.message = "Something Went Wrong, Please Try Again!!";
        dispatch({ type: CREATE_POST, payload: response });
    });

 }
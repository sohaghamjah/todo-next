import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer.js";
import postReducer from "./reducer/postReducer";

export default configureStore({
    reducer: {
        todo: todoReducer,
        post: postReducer
    }
});

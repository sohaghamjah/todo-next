import { 
    SET_TITLE,
    SET_BODY,
    CREATE_POST,
    CHANGE_INPUT_VALUE
 } from "@/redux/type/post-type";

 interface PostState {
    status: boolean;
    error: string | null;
    isLoading: false;
    data: object;
    postInput: object;
 }

 const initialState : PostState = {
    status: false,
    error: null,
    isLoading: false,
    data: {},
    postInput: {
        title: "",
        body: "",
    }
 };


 const postReducer = (state = initialState, action: any) => {
    switch (action.type){
        case CHANGE_INPUT_VALUE:
            const postInput = { ...state.postInput };
            postInput[action.payload.name] = action.payload.value;
            return{
                ...state,
                postInput,
            }
        case CREATE_POST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                status: action.payload.status,
                data: action.payload.data,
            }
        default:
            return state
    }
 }

 export default postReducer;

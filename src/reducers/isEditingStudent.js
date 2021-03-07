import * as types from "../constants/ActionTypes";

var initialState = null;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_STUDENT:
            state = action.student;
            return state;
        default:
            return state;
    }
};

export default myReducer;
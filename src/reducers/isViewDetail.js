import * as types from "../constants/ActionTypes";

var initialState = {};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.VIEWDETAIL:
            state = action.student;
            return state;
        default:
            return state;
    }
};

export default myReducer;
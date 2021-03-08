import * as types from "../constants/ActionTypes";

var initialState = {
    id: "",
    name: ""
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            state = action.filter;
            return state;
        default:
            return state;
    }
};

export default myReducer;
import * as types from "../constants/ActionTypes";

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FECTH_STUDENT:
            state = action.students;
            return [...state];

        case types.ADD_STUDENT:
            var newStudent = action.student;
            state.push(newStudent);
            return [...state];
        default:
            return state;
    }
};

export default myReducer;
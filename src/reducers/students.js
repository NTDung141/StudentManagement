import * as types from "../constants/ActionTypes";

var initialState = [];

var findIndex = (students, id) => {
    var result = -1;
    students.forEach((student, index) => {
        if (student.id === id) {
            result = index;
        }
    });
    return result;
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FECTH_STUDENT:
            state = action.students;
            return [...state];

        case types.ADD_STUDENT:
            var newStudent = action.student;
            state.push(newStudent);
            return [...state];

        case types.UPDATE_STUDENT:
            var index = findIndex(state, action.student.id);
            state[index] = action.student;
            return [...state];
        default:
            return state;
    }
};

export default myReducer;
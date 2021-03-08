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
    var index = -1;
    switch (action.type) {
        case types.FECTH_STUDENT:
            state = action.students;
            return [...state];

        case types.ADD_STUDENT:
            var newStudent = action.student;
            state.push(newStudent);
            return [...state];

        case types.UPDATE_STUDENT:
            index = findIndex(state, action.student.id);
            state[index] = action.student;
            return [...state];

        case types.DELETE_STUDENT:
            index = findIndex(state.action.student.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state]
        default:
            return state;
    }
};

export default myReducer;
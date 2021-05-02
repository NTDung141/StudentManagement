import * as types from "../constants/ActionTypes";
import axios from "axios";

export const actFetchStudentRequest = () => {
    return dispatch => {
        return axios({
            method: "GET",
            url: "https://student-server-demo1.herokuapp.com/students",
            data: null
        }).then(res => {
            dispatch(actFetchStudent(res.data))
        }).catch(err => {
            console.log(err);
        })
    }
};

export const actFetchStudent = (students) => {
    return {
        type: types.FECTH_STUDENT,
        students
    };
};

export const viewDetail = (student) => {
    return {
        type: types.VIEW_DETAIL,
        student
    };
};

export const actAddStudentRequest = (student) => {
    return dispatch => {
        return axios({
            method: "POST",
            url: "https://student-server-demo1.herokuapp.com/students",
            data: student
        }).then(res => {
            dispatch(actAddStudent(res.data));
        }).catch(err => {
            console.log(err);
        })
    }
};

export const actAddStudent = (student) => {
    return {
        type: types.ADD_STUDENT,
        student
    };
};

export const editingStudent = (student) => {
    return {
        type: types.EDIT_STUDENT,
        student
    };
};

export const actUpdateStudentRequest = (student) => {
    return dispatch => {
        return axios({
            method: "PUT",
            url: `https://student-server-demo1.herokuapp.com/students/${student.id}`,
            data: student
        }).then(res => {
            dispatch(actUpdateStudent(res.data));
        }).catch(err => {
            console.log(err);
        })
    }
};

export const actUpdateStudent = (student) => {
    return {
        type: types.UPDATE_STUDENT,
        student
    };
};

export const actDeleteStudentRequest = (student) => {
    return dispatch => {
        return axios({
            method: "DELETE",
            url: `https://student-server-demo1.herokuapp.com/students/${student.id}`,
            data: null
        }).then(res => {
            dispatch(actDeleteStudent(res.data));
            console.log(student);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
};

export const actDeleteStudent = (student) => {
    return {
        type: types.DELETE_STUDENT,
        student
    };
};

export const filterStudent = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}
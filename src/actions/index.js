import * as types from "../constants/ActionTypes";
import axios from "axios";

export const actFetchStudentRequest = () => {
    return dispatch => {
        return axios({
            method: "GET",
            url: "http://localhost:3000/students",
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

export const editingStudent = (student) => {
    return {
        type: types.EDIT_STUDENT,
        student
    };
};
import * as types from "../constants/ActionTypes";

export const viewDetail = (student) => {
    return {
        type: types.VIEWDETAIL,
        student
    };
};
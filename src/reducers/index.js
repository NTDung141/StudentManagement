import { combineReducers } from "redux";
import isViewDetail from "./isViewDetail";
import isEditingStudent from "./isEditingStudent";
import students from "./students";

const myReducer = combineReducers({
    students,
    isViewDetail,
    isEditingStudent
});

export default myReducer;
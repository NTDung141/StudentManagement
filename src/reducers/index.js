import { combineReducers } from "redux";
import isViewDetail from "./isViewDetail";
import isEditingStudent from "./isEditingStudent";
import students from "./students";
import filterTable from "./filterTable";

const myReducer = combineReducers({
    students,
    isViewDetail,
    isEditingStudent,
    filterTable
});

export default myReducer;
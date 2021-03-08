import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css';
import * as actions from "../actions/index";

class StudentDetails extends Component {

    onEditing(student) {
        this.props.onEditing(student);
    }

    render() {
        var student = this.props.isViewDetail;

        if (student) {
            return (
                <div className="container info-form">
                    <div className="mb-3 mt-3 text-center">
                        <h1>Student List</h1>
                    </div>

                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <label>ID</label>
                                </td>
                                <td>
                                    <label>{student.id}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <label>{student.name}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Gender</label>
                                </td>
                                <td>
                                    <label>{student.gender}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Faculty</label>
                                </td>
                                <td>
                                    <label>{student.faculty}</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="/update" className="btn btn-warning" onClick={() => this.onEditing(student)}>
                        Update
                    </Link>

                    <Link to="/students" className="btn btn-primary pull-right">
                        Back
                    </Link>

                </div>
            )
        }
        else {
            return (
                <h1>
                    Error
                </h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isViewDetail: state.isViewDetail
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditing: (student) => {
            dispatch(actions.editingStudent(student));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
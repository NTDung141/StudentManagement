import React, { Component } from "react";
import Student from "./Student";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    render() {
        const studentList = this.props.students;
        const elmStudents = studentList.map((student, index) => {
            return <Student key={student.id} index={index} student={student} />
        })
        return (
            <div className="container">
                <div className="mb-3 mt-3 text-center">
                    <h1>Student List</h1>
                </div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Order</th>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterID"
                                // onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                // onChange={this.onChange}
                                />
                            </td>
                            <td></td>
                        </tr>
                        {elmStudents}
                    </tbody>
                </table>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStudents: () => {
            dispatch(actions.actFetchStudentRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
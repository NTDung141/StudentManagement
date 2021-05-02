import React, { Component } from "react";
import Student from "./Student";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterId: "",
            fitlerName: ""
        }
    }

    componentWillMount() {
        this.props.fetchAllStudents();
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        var filterStudent = {
            id: name === "filterId" ? value : this.state.filterId,
            name: name === "filterName" ? value : this.state.fitlerName
        }
        this.props.onFilterTable(filterStudent);
    }

    render() {
        var studentList = this.props.students;
        var filterTable = this.props.filterTable;

        // filter data
        if (filterTable) {
            if (filterTable.name) {
                studentList = studentList.filter((student) => {
                    return student.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
                })
            }
            if (filterTable.id) {
                studentList = studentList.filter((student) => {
                    return student.id.toLowerCase().indexOf(filterTable.id.toLowerCase()) !== -1;
                })
            }
        }

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
                                    name="filterId"
                                    onChange={(event) => this.onChange(event)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    onChange={(event) => this.onChange(event)}
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
        students: state.students,
        filterTable: state.filterTable
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStudents: () => {
            dispatch(actions.actFetchStudentRequest());
        },
        onFilterTable: (filter) => {
            dispatch(actions.filterStudent(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
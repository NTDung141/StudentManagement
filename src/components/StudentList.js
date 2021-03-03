import React, { Component } from "react";
import axios from "axios";
import Student from "./Student";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "http://localhost:3000/students",
            data: null
        }).then(res => {
            this.setState({
                studentList: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { studentList } = this.state;
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

export default StudentList;
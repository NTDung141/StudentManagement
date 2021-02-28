import React, { Component } from "react";

class Student extends Component {

    render() {
        var { student, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                    <button type="button" className="btn btn-primary">View</button>
                </td>
            </tr>
        )
    }
}

export default Student;
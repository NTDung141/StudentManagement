import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";


class Student extends Component {

    onViewDetail(student) {
        this.props.onViewDetail(student);
    }

    render() {
        var { student, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                    <Link to="/studentDetail" className="btn btn-primary" onClick={() => this.onViewDetail(student)}>
                        View
                    </Link>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onViewDetail: (student) => {
            dispatch(actions.viewDetail(student));
        }
    };
};
export default connect(null, mapDispatchToProps)(Student);
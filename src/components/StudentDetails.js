import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css';

class StudentDetails extends Component {

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
                                    <label>Faculity</label>
                                </td>
                                <td>
                                    <label>{student.faculity}</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="btn btn-warning">
                        Update
                    </button>

                    <button className="btn btn-primary pull-right">
                        Back
                    </button>

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

export default connect(mapStateToProps, null)(StudentDetails);
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../actions/index";
import "../App.css";

class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            gender: "",
            faculty: "",
            redirect: null

        }
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        if (this.props.isEditingStudent !== null) {
            var student = this.props.isEditingStudent;
            this.setState({
                id: student.id,
                name: student.name,
                gender: student.gender,
                faculty: student.faculty
            })
        }

        if (this.props.isAdd) {
            this.setState({
                id: "",
                name: "",
                gender: "",
                faculty: "",
                redirect: null
            })
        }
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    componentWillUnmount() {
        this.props.onEditing(null);
        this.setState({
            id: "",
            name: "",
            gender: "",
            faculty: "",
            redirect: null
        })
    }

    onSave(event) {
        event.preventDefault();
        if (this.props.isAdd) {
            this.props.onAddStudent(this.state);
            this.props.fetchAllStudents();
            this.setState({
                redirect: "/students"
            })
        }
        else {
            console.log(this.state);
            this.props.onUpdateStudent(this.state);
            this.props.fetchAllStudents();
            this.setState({
                redirect: "/studentDetail"
            })
        }
    }

    onViewDetail(student) {
        this.props.onViewDetail(student);
    }

    render() {
        var student = this.state;
        if (this.state.redirect !== null) {
            this.onViewDetail(student);
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container mt-3">
                <h1 className="center mb-5">{student.id !== "" ? "Update Student Infomation" : "New Student Infomation"}</h1>
                <div className="center">
                    <form onSubmit={(event) => this.onSave(event)}>
                        <div classname="mb-3">
                            <label >ID</label>
                            <input type="text" className="form-control" name="id" value={student.id} onChange={this.onChange} />
                        </div>
                        <div classname="mb-3">
                            <label >Name</label>
                            <input type="text" className="form-control" name="name" value={student.name} onChange={this.onChange} />
                        </div>
                        <div classname="mb-3">
                            <label >Faculty</label>
                            <input type="text" className="form-control" name="faculty" value={student.faculty} onChange={this.onChange} />
                        </div>
                        <div classname="mb-3">
                            <label >Gender</label>
                            <input className="ml-5" type="radio" id="male" name="gender" value="male" checked={student.gender !== "" ? (student.gender === "male" ? true : false) : false} onChange={this.onChange} />
                            <label className="ml-2">Male</label>
                            <input className="ml-3" type="radio" id="female" name="gender" value="female" checked={student.gender !== "" ? (student.gender === "female" ? true : false) : false} onChange={this.onChange} />
                            <label className="ml-2">Female</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">{this.props.isAdd ? "Add" : "Update"}</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isEditingStudent: state.isEditingStudent
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditing: (student, isUpdate) => {
            dispatch(actions.editingStudent(student, isUpdate));
        },
        onAddStudent: (student) => {
            dispatch(actions.actAddStudentRequest(student));
        },
        onUpdateStudent: (student) => {
            dispatch(actions.actUpdateStudentRequest(student));
        },
        onViewDetail: (student) => {
            dispatch(actions.viewDetail(student));
        },
        fetchAllStudents: () => {
            dispatch(actions.actFetchStudentRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
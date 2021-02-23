import React, { Component } from "react";
import Home from "./components/Home";
import StudentList from "./components/StudentList";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/students",
        exact: false,
        main: () => <StudentList />
    }
]

export default routes;
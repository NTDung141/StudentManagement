import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import StudentListPage from "./pages/StudentListPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/students",
        exact: false,
        main: () => <StudentListPage />
    }
]

export default routes;
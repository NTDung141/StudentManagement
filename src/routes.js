import React from "react";
import StudentDetails from "./components/StudentDetails";
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
    },
    {
        path: "/student/detail",
        exact: false,
        main: () => <StudentDetails />
    }
]



export default routes;
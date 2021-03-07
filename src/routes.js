import React from "react";
import StudentDetails from "./components/StudentDetails";
import StudentForm from "./components/StudentForm";
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
        path: "/add",
        exact: false,
        main: () => <StudentForm />
    },
    {
        path: "/studentDetail",
        exact: false,
        main: () => <StudentDetails />
    }
]



export default routes;
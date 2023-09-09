import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import SubjectsLayout from "../Layouts/SubjectsLayout/SubjectsLayout";
import UserLayout from "../Layouts/UserLayout/UserLayout";
import Classes from "../Pages/Classes/Classes";
import AllInstructors from "../Pages/Dashboard/Admin/AllInstructors/AllInstructors";
import InstructorsRequest from "../Pages/Dashboard/Admin/InstructorsRequest/InstructorsRequest";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllStudents from "../Pages/Dashboard/Instructor/AllStudents/AllStudents";
import StudentsRequest from "../Pages/Dashboard/Instructor/StudentsRequest/StudentsRequest";
import MyInfo from "../Pages/Dashboard/Student/MyInfo/MyInfo";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import InstructorSignUp from "../Pages/SignUp/InstructorSignUp/InstructorSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import StudentSignUp from "../Pages/SignUp/StudentSignUp/StudentSignUp";
import Subjects from "../Pages/Subjects/Subjects";
import Teachers from "../Pages/Teachers/Teachers";
import AdminRoute from "./AdminRoute/AdminRoute";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import StudentRoute from "./StudentRoute/StudentRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'teachers',
                element: <Teachers />
            }
        ]
    },
    {
        path: '/subjects',
        element: <SubjectsLayout />,
        children: [
            {
                path: 'class/:class_num',
                element: <Subjects />,
                loader: ({ params }) => params.class_num
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardHome /></PrivateRoute>
            },
            {
                path: 'home',
                element: <DashboardHome />
            },
            {
                path: "instructors",
                element: <AdminRoute><AllInstructors /></AdminRoute>
            },
            {
                path: "instructors-request",
                element: <AdminRoute><InstructorsRequest /></AdminRoute>
            },
            {
                path: "students",
                element: <InstructorRoute><AllStudents /></InstructorRoute>
            },
            {
                path: "students-request",
                element: <InstructorRoute><StudentsRequest /></InstructorRoute>
            },
            {
                path: "my-info",
                element: <StudentRoute><MyInfo /></StudentRoute>
            }
        ]
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'signIn',
                element: <SignIn />
            },
            {
                path: 'signUp/instructor',
                element: <InstructorSignUp />
            },
            {
                path: 'signUp/student',
                element: <StudentSignUp />
            }
        ]
    }
]);

export default routes;
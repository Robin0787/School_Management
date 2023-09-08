import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import SubjectsLayout from "../Layouts/SubjectsLayout/SubjectsLayout";
import UserLayout from "../Layouts/UserLayout/UserLayout";
import Classes from "../Pages/Classes/Classes";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
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
                element: <AdminRoute><h1 className="text-4xl bg-blue-500 p-20 text-center">All Instructors</h1></AdminRoute>
            },
            {
                path: "students",
                element: <InstructorRoute><h1 className="text-4xl bg-blue-500 p-20 text-center">All Students</h1></InstructorRoute>
            },
            {
                path: "my-info",
                element: <StudentRoute><h1 className="text-4xl bg-blue-500 p-20 text-center">My Info</h1></StudentRoute>
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
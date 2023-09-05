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
                loader: ({params}) => params.class_num
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
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
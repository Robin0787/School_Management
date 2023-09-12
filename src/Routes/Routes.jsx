import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
// import Main from "../Layouts/Main/Main";
// import SubjectsLayout from "../Layouts/SubjectsLayout/SubjectsLayout";
// import UserLayout from "../Layouts/UserLayout/UserLayout";
const SubjectsLayout = lazy(() => import('../Layouts/SubjectsLayout/SubjectsLayout'));
const UserLayout = lazy(() => import('../Layouts/UserLayout/UserLayout'));
// import Classes from "../Pages/Classes/Classes";
// import AllInstructors from "../Pages/Dashboard/Admin/AllInstructors/AllInstructors";
// import InstructorsRequest from "../Pages/Dashboard/Admin/InstructorsRequest/InstructorsRequest";
// import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Loader2 from "../Components/Loader2/Loader2";
// import AllStudents from "../Pages/Dashboard/Instructor/AllStudents/AllStudents";
// import ApprovedStudents from "../Pages/Dashboard/Instructor/ApprovedStudents/ApprovedStudents";
// import StudentsRequest from "../Pages/Dashboard/Instructor/StudentsRequest/StudentsRequest";
// import MyInfo from "../Pages/Dashboard/Student/MyInfo/MyInfo";
import Home from "../Pages/Home/Home";
// import SignIn from "../Pages/SignIn/SignIn";
// import InstructorSignUp from "../Pages/SignUp/InstructorSignUp/InstructorSignUp";
// import SignUp from "../Pages/SignUp/SignUp";
// import StudentSignUp from "../Pages/SignUp/StudentSignUp/StudentSignUp";
// import Subjects from "../Pages/Subjects/Subjects";
// import Teachers from "../Pages/Teachers/Teachers";
// import AdminRoute from "./AdminRoute/AdminRoute";
// import InstructorRoute from "./InstructorRoute/InstructorRoute";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import StudentRoute from "./StudentRoute/StudentRoute";

const AdminRoute = lazy(() => import('./AdminRoute/AdminRoute'));
const InstructorRoute = lazy(() => import('./InstructorRoute/InstructorRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));
const StudentRoute = lazy(() => import('./StudentRoute/StudentRoute'));


const SignUp = lazy(() => import('../Pages/SignUp/SignUp'));
const SignIn = lazy(() => import('../Pages/SignIn/SignIn'));
const StudentSignUp = lazy(() => import('../Pages/SignUp/StudentSignUp/StudentSignUp'));
const InstructorSignUp = lazy(() => import('../Pages/SignUp/InstructorSignUp/InstructorSignUp'));


const Main = lazy(() => import('../Layouts/Main/Main'));
const Classes = lazy(() => import('../Pages/Classes/Classes'));
const Subjects = lazy(() => import('../Pages/Subjects/Subjects'));
const Teachers = lazy(() => import('../Pages/Teachers/Teachers'));
const DashboardLayout = lazy(() => import('../Layouts/DashboardLayout/DashboardLayout'));
const DashboardHome = lazy(() => import('../Pages/Dashboard/DashboardHome'));
const AllInstructors = lazy(() => import('../Pages/Dashboard/Admin/AllInstructors/AllInstructors'));
const InstructorsRequest = lazy(() => import('../Pages/Dashboard/Admin/InstructorsRequest/InstructorsRequest'));
const AllStudents = lazy(() => import('../Pages/Dashboard/Instructor/AllStudents/AllStudents'));
const ApprovedStudents = lazy(() => import('../Pages/Dashboard/Instructor/ApprovedStudents/ApprovedStudents'));
const StudentsRequest = lazy(() => import('../Pages/Dashboard/Instructor/StudentsRequest/StudentsRequest'));
const MyInfo = lazy(() => import('../Pages/Dashboard/Student/MyInfo/MyInfo'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loader2 />}><Main /></Suspense>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'classes',
                element: <Suspense fallback={<Loader2 />}><Classes /></Suspense>
            },
            {
                path: 'teachers',
                element:  <Suspense fallback={<Loader2 />}><Teachers /></Suspense>
            }
        ]
    },
    {
        path: '/subjects',
        element: <Suspense fallback={<Loader2 />}><SubjectsLayout /></Suspense>,
        children: [
            {
                path: 'class/:class_num',
                element: <Suspense fallback={<Loader2 />}><Subjects /></Suspense>,
                loader: ({ params }) => params.class_num
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Suspense fallback={<Loader2 />}><DashboardLayout /></Suspense></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Suspense fallback={<Loader2 />}><DashboardHome /></Suspense></PrivateRoute>
            },
            {
                path: 'home',
                element:<Suspense fallback={<Loader2 />}><DashboardHome /></Suspense>
            },
            {
                path: "instructors",
                element: <AdminRoute><Suspense fallback={<Loader2 />}><AllInstructors /></Suspense></AdminRoute>
            },
            {
                path: "instructors-request",
                element: <AdminRoute><Suspense fallback={<Loader2 />}><InstructorsRequest /></Suspense></AdminRoute>
            },
            {
                path: "students",
                element: <InstructorRoute><Suspense fallback={<Loader2 />}><AllStudents /></Suspense></InstructorRoute>
            },
            {
                path: "approved-students",
                element: <InstructorRoute><Suspense fallback={<Loader2 />}><ApprovedStudents /></Suspense></InstructorRoute>
            },
            {
                path: "students-request",
                element: <InstructorRoute><Suspense fallback={<Loader2 />}><StudentsRequest /></Suspense></InstructorRoute>
            },
            {
                path: "my-info",
                element: <StudentRoute><Suspense fallback={<Loader2 />}><MyInfo /></Suspense></StudentRoute>
            }
        ]
    },
    {
        path: '/user',
        element: <Suspense fallback={<Loader2 />}><UserLayout /></Suspense>,
        children: [
            {
                path: 'signUp',
                element: <Suspense fallback={<Loader2 />}><SignUp /></Suspense>
            },
            {
                path: 'signIn',
                element: <Suspense fallback={<Loader2 />}><SignIn /></Suspense>
            },
            {
                path: 'signUp/instructor',
                element: <Suspense fallback={<Loader2 />}><InstructorSignUp /></Suspense>
            },
            {
                path: 'signUp/student',
                element: <Suspense fallback={<Loader2 />}><StudentSignUp /></Suspense>
            }
        ]
    }
]);

export default routes;
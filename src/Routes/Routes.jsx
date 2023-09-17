import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoader from "../Components/PageLoader/PageLoader";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';

import Main from '../Layouts/Main/Main';
import SubjectsLayout from '../Layouts/SubjectsLayout/SubjectsLayout';
import UserLayout from '../Layouts/UserLayout/UserLayout';

import ContentLoader from "../Components/ContentLoader/ContentLoader";
import AdminRoute from "./AdminRoute/AdminRoute";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import StudentRoute from "./StudentRoute/StudentRoute";



const Home = lazy(() => import('../Pages/Home/Home'));
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));

const SignUp = lazy(() => import('../Pages/SignUp/SignUp'));
const SignIn = lazy(() => import('../Pages/SignIn/SignIn'));
const StudentSignUp = lazy(() => import('../Pages/SignUp/StudentSignUp/StudentSignUp'));
const InstructorSignUp = lazy(() => import('../Pages/SignUp/InstructorSignUp/InstructorSignUp'));


const Classes = lazy(() => import('../Pages/Classes/Classes'));
const Subjects = lazy(() => import('../Pages/Subjects/Subjects'));
const Teachers = lazy(() => import('../Pages/Teachers/Teachers'));

const Profile = lazy(() => import("../Pages/Profile/Profile"));

const AllInstructors = lazy(() => import('../Pages/Dashboard/Admin/AllInstructors/AllInstructors'));
const InstructorsRequest = lazy(() => import('../Pages/Dashboard/Admin/InstructorsRequest/InstructorsRequest'));
const RejectedInstructors = lazy(() => import("../Pages/Dashboard/Admin/RejectedInstructors/RejectedInstructors"));
const ApprovedInstructors = lazy(() => import("../Pages/Dashboard/Admin/ApprovedInstructors/ApprovedInstructors"));

const AllStudents = lazy(() => import('../Pages/Dashboard/Instructor/AllStudents/AllStudents'));
const AddStudent = lazy(() => import("../Pages/Dashboard/Instructor/AddStudent/AddStudent"));
const ApprovedStudents = lazy(() => import('../Pages/Dashboard/Instructor/ApprovedStudents/ApprovedStudents'));
const StudentsRequest = lazy(() => import('../Pages/Dashboard/Instructor/StudentsRequest/StudentsRequest'));

const MyInfo = lazy(() => import('../Pages/Dashboard/Student/MyInfo/MyInfo'));

const routes = createBrowserRouter([
    // Default Routes
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<PageLoader />}><Home /></Suspense>
            },
            {
                path: 'classes',
                element: <Suspense fallback={<PageLoader />}><Classes /></Suspense>
            },
            {
                path: 'teachers',
                element: <Suspense fallback={<PageLoader />}><Teachers /></Suspense>
            }
        ]
    },
    // Subjects Routes
    {
        path: '/subjects',
        element: <SubjectsLayout />,
        children: [
            {
                path: 'class/:class_num',
                element: <Suspense fallback={<PageLoader />}><Subjects /></Suspense>,
                loader: ({ params }) => params.class_num
            }
        ]
    },
    {
        path: '/about-us',
        element: <Suspense fallback={<PageLoader />}><AboutUs /></Suspense>
    },
    // Dashboard Routes
    {
        path: "/dashboard",
        element: <PrivateRoute><Suspense fallback={<PageLoader />}><DashboardLayout /> </Suspense></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><DashboardHome /> </Suspense></PrivateRoute>
            },
            {
                path: 'home',
                element: <PrivateRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><DashboardHome /> </Suspense></PrivateRoute>
            },
            {
                path: "instructors",
                element: <AdminRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><AllInstructors /></Suspense></AdminRoute>
            },
            {
                path: "instructors-request",
                element: <AdminRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><InstructorsRequest /></Suspense></AdminRoute>
            },
            {
                path: "approved-instructors",
                element: <AdminRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><ApprovedInstructors /></Suspense></AdminRoute>
            },
            {
                path: "rejected-instructors",
                element: <AdminRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><RejectedInstructors /></Suspense></AdminRoute>
            },
            {
                path: "students",
                element: <InstructorRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><AllStudents /></Suspense></InstructorRoute>
            },
            {
                path: "add-student",
                element: <InstructorRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><AddStudent /></Suspense></InstructorRoute>
            },
            {
                path: "approved-students",
                element: <InstructorRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><ApprovedStudents /></Suspense></InstructorRoute>
            },
            {
                path: "students-request",
                element: <InstructorRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><StudentsRequest /></Suspense></InstructorRoute>
            },
            {
                path: "my-info",
                element: <StudentRoute><Suspense fallback={<ContentLoader h={'h-[50vh] lg:h-[60vh]'} />}><MyInfo /></Suspense></StudentRoute>
            },
            {
                path: 'profile',
                element: <Suspense fallback={<PageLoader />}><Profile /></Suspense>
            }
        ]
    },
    // SignIn & SignUp Routes
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: 'signUp',
                element: <Suspense fallback={<PageLoader />}><SignUp /></Suspense>
            },
            {
                path: 'signIn',
                element: <Suspense fallback={<PageLoader />}><SignIn /></Suspense>
            },
            {
                path: 'signUp/instructor',
                element: <Suspense fallback={<PageLoader />}><InstructorSignUp /></Suspense>
            },
            {
                path: 'signUp/student',
                element: <Suspense fallback={<PageLoader />}><StudentSignUp /></Suspense>
            }
        ]
    }
]);

export default routes;

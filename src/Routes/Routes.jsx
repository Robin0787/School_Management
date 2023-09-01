import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import SubjectsLayout from "../Layouts/SubjectsLayout/SubjectsLayout";
import Classes from "../Pages/Classes/Classes";
import Home from "../Pages/Home/Home";
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
            },
            {
                path: "test",
                element: <h1>Ok</h1>
            }
        ]
    }
]);

export default routes;
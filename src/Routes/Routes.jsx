import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
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
            },
            {
                path: '/subjects/class/:class_name',
                element: <Subjects />,
                loader: ({params}) => params.class_name
            }
        ]
    }
]);

export default routes;
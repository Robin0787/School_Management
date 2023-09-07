import { Outlet } from "react-router-dom";
import SideMenu from "../../Components/SideMenu/SideMenu";


const DashboardLayout = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <section className="hidden lg:block w-[20%] fixed top-0">
                <SideMenu />
            </section>
            <section className="relative w-full lg:w-[80%] bg-blue-600 lg:left-[20%] p-5">
                <Outlet />
            </section>
        </section>
    )
}

export default DashboardLayout;
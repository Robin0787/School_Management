import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import SideMenu from "../../Components/SideMenu/SideMenu";
import styles from "../../Pages/Shared/Navbar/Navbar.module.css";

const DashboardLayout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <section className="relative w-full overflow-hidden min-h-screen">
            {/* SideMenu for large devices */}
            <section className="hidden lg:block w-[20%] fixed top-0">
                <SideMenu />
            </section>
            {/* SideMenu Section for medium and small devices */}
            <section className="lg:hidden flex justify-start py-5 bg-[#0f172a] text-white">
                <Container>
                    <div className="flex justify-between items-center w-full">
                        <Link to={'/'} className="relative flex items-center gap-2 text-green-400">
                            <GoBook size={50} />
                            <GoBook size={30} className="absolute top-[10px] left-[10px]" />
                            <h1 className={styles.logo_name}>Sherlock</h1>
                        </Link>
                        <AiOutlineMenuFold className="cursor-pointer" onClick={() => { setOpenMenu(!openMenu) }} size={30} />
                    </div>
                </Container>
                <section className={`absolute ${openMenu ? "w-full sm:w-64 right-0" : "w-0 -right-full "} top-0  z-50 duration-500`}>
                    <SideMenu setOpenMenu={setOpenMenu} />
                </section>
            </section>
            <section className="relative w-full lg:w-[80%] lg:left-[20%] bg-white text-black dark:bg-[#0f172a] dark:text-white h-full">
                <HeaderTitle h="lg:h-[35vh]"/>
                <Outlet />
            </section>
        </section>
    )
}

export default DashboardLayout;
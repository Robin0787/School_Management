import { MdDateRange } from "react-icons/md";
import NoticeBoardImg from "../../../assets/Home/Sections/notice-board.png";

const NoticeBoard = () => {
    return (
        <section className="mt-10">
            <div className="relative">
                <h1 className="font-Nunito text-2xl font-semibold text-black dark:text-white ">
                    Notice Board
                </h1>
                <div className="bottom"></div>
            </div>
            <div className="mt-10 relative">
                <img src={NoticeBoardImg} alt="" className="w-full rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="w-[80%] mt-28">
                        <h3 className="font-Themify text-3xl font-bold text-black text-center">New Website Published</h3>
                            <div className="flex justify-start items-center gap-2 mt-5 text-sm text-black">
                                <MdDateRange size={18} className="text-primary"/>
                                <h1>October 10, 2023</h1>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoticeBoard;
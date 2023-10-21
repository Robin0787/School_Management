import { useState } from "react";
import { GoDownload } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import CustomModal from "../../../Components/CustomModal/CustomModal";
import NoticeBoardImg from "../../../assets/Home/Sections/notice-board.png";
// Import the main component
import { Viewer, Worker } from '@react-pdf-viewer/core';
import AOS from 'aos';
import pdfFile from "../../../assets/Task.pdf";
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const NoticeBoard = () => {
    const [openModal, setOpenModal] = useState(false);


    const characterMap = {
        isCompressed: true,
        // The url has to end with "/"
        url: 'https://unpkg.com/pdfjs-dist@2.6.347/cmaps/',
    };

    AOS.init();

    return (
        <section className="mt-10" data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="relative">
                <h1 className="font-Nunito text-2xl font-semibold text-black dark:text-white ">
                    Notice Board
                </h1>
                <div className="bottom"></div>
            </div>
            <div className="mt-10 relative">
                <img src={NoticeBoardImg} alt="" className="w-full rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="w-[85%] mt-24">
                        <h3 className="font-Themify text-3xl font-bold text-black text-center">New Website Published</h3>
                        <div className="flex justify-between items-center  mt-8 text-sm text-black">
                            <div className="flex justify-start items-center gap-2">
                                <MdDateRange size={18} className="text-primary" />
                                <h1>October 10, 2023</h1>
                            </div>
                            <p className="font-semibold cursor-pointer hover:text-green-700 duration-300"
                                onClick={() => { setOpenModal(true) }}>Open Notice</p>
                        </div>
                    </div>
                </div>
                <CustomModal openModal={openModal} setModal={setOpenModal}>
                    <section className="w-[617px] h-[600px] rounded-lg bg-[#0f172a]">
                        <Worker
                            workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                                characterMap={characterMap}
                                fileUrl={pdfFile}
                                defaultScale={1}
                            />
                        </Worker>
                         {/* If have a PDF file in storage */}
                        <a
                            href={pdfFile}
                            download="Notice.pdf"
                            className='absolute bottom-6 right-7 text-black hover:text-primary duration-300'
                        >
                            <GoDownload size={30} />
                        </a>
                         {/* If have a url of pdf */}
                        {/* <a
                            href={pdfFileUrl} target="_blank" rel="noopener noreferrer"
                            className='absolute bottom-5 right-7 p-[6px] rounded-full text-black hover:text-primary duration-300'
                        >
                            <GoDownload size={30} />
                        </a> */}
                    </section>
                </CustomModal>
            </div>
        </section>
    );
};

export default NoticeBoard;
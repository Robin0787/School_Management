import AOS from 'aos';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

const TeacherCard = ({ teacherInfo }) => {
    const { img, name } = teacherInfo;
    const [detailsModal, setDetailsModal] = useState(false);

    AOS.init();
    return (
        <>
            <div className="relative overflow-hidden group cursor-pointer"
                data-aos="zoom-out" data-aos-mirror="false" data-aos-once="true" data-aos-delay="100"
                onClick={() => {setDetailsModal(true)}}>
                <img src={img} alt="instructor" className="h-full w-full rounded-md" />
                <div className="absolute bottom-1 -left-10 group-hover:left-1 opacity-0 group-hover:opacity-100 duration-500 delay-75 z-10">
                    <h1 className="bg-[#22c55e] text-white text-sm text-center px-2 py-1 rounded">{name}</h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 duration-700 rounded-md">
                </div>
            </div>
            <DetailsModal detailsModal={detailsModal} setDetailsModal={setDetailsModal} 
            teacherInfo={teacherInfo}/>
        </>
    );
};

export default TeacherCard;
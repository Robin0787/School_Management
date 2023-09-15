import axios from 'axios';

const StoreApprovedInstructor = async (instructorID) => {
    const url = `${import.meta.env.VITE_BASE_URL}/store-approved-instructor`;
    const res = await axios.post(url, {instructorID});
    return res.data;
};

export default StoreApprovedInstructor;
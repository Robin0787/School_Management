import axios from 'axios';

const InstructorRequest = async (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/store-instructor-request`;
    const res = await axios.post(url, {...data});
    return res.data;
};

export default InstructorRequest;
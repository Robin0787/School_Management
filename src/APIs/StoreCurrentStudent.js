import axios from 'axios';

const StoreCurrentStudent = async (studentInfo) => {
    const url = `${import.meta.env.VITE_BASE_URL}/store-current-student`;
    const res = await axios.post(url, {...studentInfo});
    return res.data;
};

export default StoreCurrentStudent;
import axios from 'axios';

const UpdateCurrentStudent = async (data, id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/update-current-student/${id}`;
    const res = await axios.patch(url, {...data});
    return res.data;
};

export default UpdateCurrentStudent;
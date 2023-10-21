import axios from 'axios';

const DeleteRejectedInstructor = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/delete-rejected-instructor/${id}`;
    const res = await axios.delete(url);
    return res.data;
};

export default DeleteRejectedInstructor;
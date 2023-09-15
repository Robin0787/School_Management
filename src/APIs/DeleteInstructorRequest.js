import axios from "axios";

const DeleteInstructorRequest = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/delete-instructor-request/${id}`;
  const res = await axios.delete(url);
  return res.data;
};

export default DeleteInstructorRequest;

import axios from "axios";

const StudentRequest = async (data) => {
  const url = `${import.meta.env.VITE_BASE_URL}/store-student-request`;
  const res = await axios.post(url, { ...data });
  return res.data;
};

export default StudentRequest;

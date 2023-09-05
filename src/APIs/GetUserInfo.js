import axios from "axios";

const GetUserInfo = async (email) => {
    const url = `${import.meta.env.VITE_BASE_URL}/get-approved-user/${email}`;
    const res = await axios.get(url);
    return res.data;
};

export default GetUserInfo;
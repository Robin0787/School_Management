

const ApprovedInstructorCard = ({ item }) => {
    const { _id, firstName, lastName, photo, email, phone, subject } = item;

    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <img src={photo} alt="" className="h-32 w-[80%] rounded-lg mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start md:pl-5">{firstName + ' ' + lastName}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Subject</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{subject}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Email</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{email}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-5">Phone</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{phone}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-5">Phone Verified</td>
                            <td>:</td>
                            <td className={`md:text-start md:pl-5`}>
                                <span className={`py-1 px-3 rounded-full 
                                ${true ? 'bg-green-500 text-green-500' : "bg-red-500 text-red-500"} bg-opacity-20`}>{'True'}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-500 bg-opacity-40 py-2">
                <button
                    className="w-full text-center text-xs pb-1"
                >
                    Approved
                </button>
            </div>
        </div>
    );
};

export default ApprovedInstructorCard;
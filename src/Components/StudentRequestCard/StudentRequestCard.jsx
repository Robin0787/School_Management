

const StudentRequestCard = ({ item }) => {
    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <img src={item?.photo} alt="" className="h-32 w-32 rounded-full mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-sm">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2">Name</td>
                            <td>:</td>
                            <td>{item?.name}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2">class</td>
                            <td>:</td>
                            <td>{item?.className}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2">Roll</td>
                            <td>:</td>
                            <td>{item?.roll}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2">Father</td>
                            <td>:</td>
                            <td>{item?.fatherName}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2">Address</td>
                            <td>:</td>
                            <td>{item?.address}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2">Phone</td>
                            <td>:</td>
                            <td>{item?.phone}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 whitespace-nowrap">Birth Date</td>
                            <td>:</td>
                            <td >{item?.dateOfBirth}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center gap-5 p-3">
                <button className="w-1/2 text-center text-sm
                 bg-red-500 bg-opacity-10 border-red-500  py-2 border rounded hover:bg-opacity-30 
                 hover:shadow-[0px_0px_7px] hover:shadow-red-600 duration-300">
                    Reject
                </button>
                <button className="w-1/2 text-center text-sm 
                 bg-green-500 bg-opacity-10 border-green-500 py-2 border rounded hover:bg-opacity-30 hover:shadow-[0px_0px_7px] hover:shadow-green-600 duration-300 ">
                    Accept</button>
            </div>
        </div>
    );
};

export default StudentRequestCard;
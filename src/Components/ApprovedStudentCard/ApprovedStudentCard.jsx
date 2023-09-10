

const ApprovedStudentCard = ({item}) => {

    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <img src={item?.photo} alt="" className="h-32 w-32 rounded-full mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start md:pl-6">{item?.name}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Class</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.className}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Year</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.year}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-8">Roll</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.roll}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Father</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.fatherName}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Address</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.address}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Phone</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.phone}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8 whitespace-nowrap">Birth Date</td>
                            <td>:</td>
                            <td className="py-2 whitespace-nowrap md:text-start md:pl-6">{item?.dateOfBirth}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedStudentCard;
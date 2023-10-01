import { useCallback } from "react";


const CurrentStudentCard = ({ item }) => {

    const getRandomBg = useCallback(() => {
        const backgrounds = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-purple-500', 'bg-sky-500', 'bg-red-500'];

        const random_number = Math.floor(Math.random() * backgrounds.length) + 0;
        return backgrounds[random_number];
    }, []);

    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <div className={`h-24 w-24 mx-auto my-5 rounded-full flex justify-center items-center ${getRandomBg()} bg-opacity-80`}>
                <h1 className="text-3xl text-center">{item.roll}</h1>
            </div>
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-center text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start pl-6">{item?.name}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Class</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.class}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Roll</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.roll}</td>
                        </tr>
                        {
                            item.group && (
                                <tr className="border-b border-gray-800">
                                    <td className="py-2 md:text-start pl-8">Group</td>
                                    <td>:</td>
                                    <td className="py-2 md:text-start pl-6">{item?.group}</td>
                                </tr>
                            )
                        }
                        <tr className={`${item.group ? "bg-[#141d31]" : ""} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Father</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.father}</td>
                        </tr>
                        <tr className={`${item.group ? "" : "bg-[#141d31]"} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Address</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.address}</td>
                        </tr>
                        <tr className={`${item.group ? "bg-[#141d31]" : ""} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Gender</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentStudentCard;
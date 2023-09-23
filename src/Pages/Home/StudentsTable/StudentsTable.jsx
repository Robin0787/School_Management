import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCallback } from 'react';


export default function StudentsTable({ items, query, value }) {
    const filteredItems = items?.filter(item => item[query] === value);

    const getRandomBg = useCallback(() => {
        const backgrounds = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-purple-500', 'bg-sky-500', 'bg-red-500'];

        const random_number = Math.floor(Math.random() * backgrounds.length) + 0;
        return backgrounds[random_number];
    }, []);

    return (
        <TableContainer component={Paper} id="studentsTable"
            className='h-[336px] md:h-[383px] w-full overflow-auto rounded'>
            <Table aria-label="simple table" className='relative'>

                <TableHead className='sticky w-full top-0 bg-white'>
                    <TableRow className='bg-gray-500/20'>
                        <TableCell align="center">
                            <span className='font-bold'>Roll</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className='font-bold whitespace-nowrap'>Students Name</span>
                        </TableCell>
                        {
                            filteredItems[0]?.group ?
                                <TableCell align="center"><span className='font-bold'>Group</span></TableCell>
                                :
                                ""
                        }
                        <TableCell align="center">
                            <span className='font-bold whitespace-nowrap'>Father Name</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className='font-bold'>Address</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className='font-bold'>Gender</span>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        filteredItems.map((item) => (
                            <TableRow
                                key={item._id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:nth-of-type(2n)': { backgroundColor: 'rgba(128, 128, 128, 0.15)' }
                                }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    <span className={`whitespace-nowrap ${getRandomBg()} p-2 rounded-full text-white`}>{item.roll}
                                    </span>
                                </TableCell>
                                <TableCell align="center">
                                    <span className='font-semibold  whitespace-nowrap'>{item.name}</span>
                                </TableCell>
                                {
                                    item?.group ?
                                        <TableCell align="center">{item.group}</TableCell>
                                        :
                                        ""
                                }
                                <TableCell align="center">
                                    <span className='whitespace-nowrap'>{item.father}
                                    </span></TableCell>
                                <TableCell align="center">
                                    <span className='whitespace-nowrap'>{item.address}
                                    </span></TableCell>
                                <TableCell align="center">
                                    <span className='whitespace-nowrap'>{item.gender}</span></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

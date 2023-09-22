import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function getRandomBg() {
    const backgrounds = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-purple-500', 'bg-sky-500', 'bg-red-500'];

    const random_number = Math.floor(Math.random() * backgrounds.length) + 0;
    return backgrounds[random_number];
}



export default function StudentsTable({items}) {
    return (
        <TableContainer component={Paper} id="studentsTable"
        className='h-[336px] w-full overflow-scroll rounded'>
            <Table aria-label="simple table" className='relative'>
                <TableHead className='sticky w-full top-0 bg-white'>
                    <TableRow className='bg-gray-500/20'>
                        <TableCell align="center">Roll</TableCell>
                        <TableCell align="center">Students Name</TableCell>
                        <TableCell align="center">Father Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    items.map((item) => (
                        <TableRow
                            key={item._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                                '&:nth-of-type(2n)': { backgroundColor: 'rgba(128, 128, 128, 0.15)'} }}
                        >
                            <TableCell component="th" scope="row" align="center">
                                <span className={`${getRandomBg()} p-2 rounded-full text-white`}>{item.roll}</span>
                            </TableCell>
                            <TableCell  align="center"> {item.name} </TableCell>
                            <TableCell align="center">{item.father}</TableCell>
                            <TableCell align="center">{item.address}</TableCell>
                            <TableCell align="center">{item.gender}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
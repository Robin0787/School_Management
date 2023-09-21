
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

const Calender = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem >
                    <DateCalendar className="text-black bg-white border rounded" 
                    defaultValue={dayjs(new Date())} readOnly />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default Calender;
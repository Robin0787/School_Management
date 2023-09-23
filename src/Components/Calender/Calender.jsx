
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';

const Calender = () => {
    const currentDate = dayjs(new Date());
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const handleDateChange = (newDate) => {
        if (!newDate.isSame(currentDate, 'day')) {
            setSelectedDate(currentDate);
        }
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem >
                    <DateCalendar className="text-black bg-white border rounded" 
                    value={selectedDate}
                    onChange={handleDateChange} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default Calender;
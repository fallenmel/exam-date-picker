import { useEffect, useState } from 'react';
import DateRow from './DateRow'

const DatePart = ({numRows, numCols, fmonth, fyear, fdate, onSelectDate, isPrestince, selectedDay}) => {

    const withFocus = fmonth == (new Date().getMonth());
    const listDays = new Map();
 

    const calculateDays = (year,month) => {
        const numberOfdaysInPrevMonths = new Date(year, month, 0).getDate(); 
        const numberOfdaysInMonths = new Date(year, month + 1, 0).getDate(); 
        const totalOfSlot = numRows*numCols;
        const day = new Date(year, month, 1).getDay();
  

        //prev days
        if(day != 0){
            //1st row have last month days           
            for (let i = 0; i < day; i++) {
                // listDays.push([numberOfdaysInPrevMonths-i);
                listDays.set(numberOfdaysInPrevMonths-i+"p", numberOfdaysInPrevMonths-i)
            }

           
        }

        //current month
        for (let i = 1; i <= numberOfdaysInMonths; i++) {
            // listDays.push(i);
            listDays.set(i+"c", i)
        }

        const remainSlot = totalOfSlot - listDays.size;

        // next month
        for (let i = 1; i <= remainSlot; i++) {
            // listDays.push(i);
            listDays.set(i+"n", i)
        }

  
        // console.log("listDays** => " , listDays)

        // setListDays(listDays);

    
    }
   

    calculateDays(fyear,fmonth);


    return <>
    <div className='datepart-calendar-wrapper'>
        <div className='date-header'>
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
        </div>
            {[...Array(numRows)].map((e,i) => (
            <>
                <DateRow 
                    numCols={numCols} 
                    listDays={listDays} 
                    row={i} 
                    withFocus={withFocus} 
                    fdate={fdate} 
                    onSelectDate={onSelectDate}
                    isPrestince={isPrestince}
                    selectedDay={selectedDay}
                    />
            </>
        ))}
    </div>
    </>
}


export default DatePart;
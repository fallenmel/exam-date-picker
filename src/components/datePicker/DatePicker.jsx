import Calender from './Calendar';
import {  useState } from "react";

const DatePicker = () => {

  const [isFocused, setIsFocused] = useState(false); 

  const [date ,setDate] = useState(new Date().toLocaleDateString("sv"));


  const onSelect = (date)=>{
    setIsFocused(false); 
    setDate(date);
  }

  const handleOnFocus = () => { 
    setIsFocused(true); 
  }; 



  return (
    <>
      <div className={`date-picker-wrapper ${isFocused ? 'focused' : ''}`}
      >
        <div className='picker-wrapper'> 
          <input 
            type='text' 
            value={date} onKeyDown={(e) => e.preventDefault()}
            onFocus={handleOnFocus} 
          />
          {/* disable keypress  */}
        </div>
        <div className='calendar-wrapper'>
          <Calender  date={date}  onSelect={onSelect}/>
        </div>
      </div>
      
    </>
  );
};

export default DatePicker;

import DatePart from './DatePart';
import DateNavigation from './DateNavigation'
import MonthPart from './MonthPart'
import YearPart from './YearPart'
import { useEffect, useState } from "react";
const Calender = ({date, onSelect}) => {

  
  const numRows = 6;
  const numCols  = 7;
  const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  // const yyyy = today.getFullYear();

  const arr_date = date.split('-');
  const yyyy = arr_date[0];
  const mm = arr_date[1] - 1;
  const dd = arr_date[2];

  console.log('arr_date => ', arr_date)
  const defaultTitle = today.toLocaleDateString('default', { month: 'long' }) +" "+yyyy;

  const [mode ,setMode] = useState(0);
  const [title ,setTitle] = useState(defaultTitle);
  const [fmonth, setFmonth] = useState(mm); //default focus
  const [fyear, setFyear] = useState(yyyy); //default focus
  const [fdate, setFdate] = useState(dd); //default focus

  const [selectedYear, setSelectedYear] = useState(yyyy);
  const [selectedMM, setSelectedMM] = useState(mm);
  const [selectedDay, setSelectedDay] = useState(dd);

  const [isPrestince, setIsPrestince] = useState(true);

  // 0 -> normal
  // 1 -> month
  // 2 -> year

  const changeMode = () => {
    const nextMode = mode + 1;
    setMode(nextMode > 2 ? 0 : nextMode)
  }

  const changeMonth = (action) => {
    // true => next month
    // false => pre month
    
    if(action){
      const _fmonth = fmonth - 1;
      if(_fmonth < 1){
        setFyear( fyear - 1);
      }
      setFmonth(_fmonth < 1 ? 12 : _fmonth);
      setSelectedMM(_fmonth < 1 ? 12 : _fmonth);


      
    }else{
      const _fmonth = parseInt(fmonth) + 1;
      if(_fmonth > 11){
        setFyear( fyear + 1);
      }
      setFmonth(_fmonth > 11 ? 0 : _fmonth);
      setSelectedMM(_fmonth > 11 ? 0 : _fmonth);
      // tempDate.setMonth(fmonth+1);
    }

    
  }

  useEffect(() => {
    console.log('fmonth changes' + fmonth);
    const tempDate = new Date(fyear, fmonth,);
    const newTitle = tempDate.toLocaleDateString('default', { month: 'long' }) +" "+fyear;
    setTitle(newTitle);
  }, [fmonth,fyear])

  useEffect(() => {
    const tempDate = new Date(selectedYear, selectedMM,selectedDay);
    const newTitle = tempDate.toLocaleDateString('default', { month: 'long' }) +" "+selectedYear;
    setTitle(newTitle);
  }, [selectedYear,selectedMM, selectedDay])

 
  const onSelectYear = (year) => {
    // setFyear(year);
    setSelectedYear(year);
    setMode(0);
    onSelect(new Date(year, selectedMM , selectedDay).toLocaleDateString("sv"));
  }

  

  const onSelectDate = (date) => {
    setSelectedDay(date)
    setIsPrestince(false)
    setMode(1);
  }

  const onSelectMonth = (month) => {
    setSelectedMM(month)
    setMode(2);
  }





  return (
    <>
        <DateNavigation changeMode={changeMode} title={title} changeMonth={changeMonth}/>
        {
          mode == 0 &&
            <DatePart 
            numRows={numRows} 
            numCols={numCols} 
            fmonth={fmonth} 
            fyear={fyear} 
            fdate={fdate} 
            onSelectDate={onSelectDate} 
            isPrestince={isPrestince}
            selectedDay={selectedDay}
            />
        }
        {
          mode == 1 &&
            <MonthPart 
              onSelectMonth={onSelectMonth}
              selectedMM={selectedMM}
            />
        }
        {
          mode == 2 &&
            <YearPart onSelectYear={onSelectYear} selectedYear={selectedYear} currentYear={yyyy}/>
        }
   
      
    </>
  );
};

export default Calender;

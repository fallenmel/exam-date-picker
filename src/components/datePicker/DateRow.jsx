const DateRow = ({numCols, listDays , row, withFocus, fdate, onSelectDate,isPrestince,selectedDay}) => {
  const start = row * numCols;
  const end = start + numCols;

  const listDatsKeys = [...listDays.keys()];
  const dates = listDatsKeys.slice(start, end);

  return (
    <>
      {/* <p> dateRow </p> */}
      <div className="calendar-row">
        {[...Array(numCols)].map((e,i) => (
          <>
            <div 
             className={`calendar-row-date ${withFocus && listDays.get(dates[i]) == fdate && dates[i].includes("c") ? 'current-date':'' }  
              ${isPrestince == false && selectedDay == listDays.get(dates[i])  ? 'selected':''}
              ${!dates[i].includes("c") ? 'disable' : ''}
             `} 
              key={i} 
              id={i}
              onClick={() => {onSelectDate(listDays.get(dates[i]))}}
            >
              <p>{listDays.get(dates[i])}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default DateRow;

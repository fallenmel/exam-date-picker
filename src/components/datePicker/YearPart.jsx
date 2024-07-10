const YearPart = ({selectedYear, currentYear, onSelectYear}) => {
    currentYear = 2024;
    const listOfYear = new Array();
    const maxSlot = 12;
    const populateYear = () => {
        //12 year
        //current year at pos 9;

        //prev year
        for (let i = 9; i > 0; i--) {
            listOfYear.push(currentYear-i);
        }

        listOfYear.push(currentYear)

   

        for (let i = 1; i < (maxSlot - 9); i++) {
            listOfYear.push(currentYear+i);
        }


    }

    populateYear();
    return(
        <>
            <div className='dateyear-wrapper'>
                {listOfYear.map((e,i) => (
                <>
                    <div 
                        className={`year ${selectedYear == e ? 'selected' : ''}  `}
                        key={i} 
                        onClick={() => onSelectYear(e)}
                    >
                        <p>{e}</p>
                    </div>
                </>
                ))}
            </div>
        </>
    )
}


export default YearPart;
const MonthPart = ({selectedMM, onSelectMonth}) => {
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

  
    return (
        <>
            <div className='datemonth-wrapper'>
                {/* {[...Array(12)].map((e,i) => (
                <>
                    <div className="month">
                        <p>month { i}</p></div>
                </>
                ))} */}
                {
                    monthNames.map((e,i) => {
                    return <>
                        <div 
                            className={`month ${selectedMM==i ? 'selected' : ''}`}
                            id={i}
                            onClick={() => onSelectMonth(i)}
                        >
                            <p>{e}</p>
                        </div>
                    </>
                    })
                }
            </div>
        </>
    )
}

export default MonthPart;
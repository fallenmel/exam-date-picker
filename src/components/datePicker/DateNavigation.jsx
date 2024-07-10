const DateNavigation = ( { changeMode, title, changeMonth }) => {
  return(
    <>
      <div className="calendar-navigation-wrapper">
        <button onClick={() => {changeMonth(true)}}>{"<"}</button>
        <div className="nav-title" onClick={changeMode}>{title}</div>
        <button onClick={() => {changeMonth(false)}}>{">"}</button>
      </div>
    </>
  )
};

export default DateNavigation;

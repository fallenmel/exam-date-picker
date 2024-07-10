import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import DatePicker from './components/datePicker/DatePicker';

function App() {
  return (
    <>  
      <div className='page'>
        <DatePicker />
      </div>
      
    </>
  );
}

export default App;

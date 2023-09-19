import  { useState, useEffect } from 'react';
import '../styles/clock.css'

function Clock() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function updateTime() {
    const cd = new Date();
    setTime(
      zeroPadding(cd.getHours(), 2) +
        ':' +
        zeroPadding(cd.getMinutes(), 2) +
        ':' +
        zeroPadding(cd.getSeconds(), 2)
    );
    setDate(
      zeroPadding(cd.getFullYear(), 4) +
        '-' +
        zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        zeroPadding(cd.getDate(), 2) +
        ' ' +
        week[cd.getDay()]
    );
  }

  function zeroPadding(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  return (
    <div id="clock" className="text-white">
      <div className="time">{time}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default Clock;

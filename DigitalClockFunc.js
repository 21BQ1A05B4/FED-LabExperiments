import React, {useState, useEffect} from 'react'

export default function DigitalClockFunc() {
  const [mytime, setTime] = useState('');
  const tick=()=>{
    let time =parseInt(new Date().getHours());
    if(new Date().getHours()>12) {
        time = toString(parseInt(Date().getHours())-12);
    }
    time = time + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    if(new Date().getHours()<12) {
        time = time + " Am";
    } else {
        time = time + " Pm";
    }
    setTime(time);
  };

  useEffect(()=>{
    const t = setInterval(tick, 1000);
    return ()=> {
        clearInterval(t);
    }
  }, [mytime])
    return (
    <div align="center"> 
      <h1>Digital Clock</h1>
      <h2>{mytime}</h2>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-red-500 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Merry Christmas!</h1>
      <p className="text-2xl">Current Time: {currentTime.toLocaleString()}</p>
    </div>
  );
}

export default App;
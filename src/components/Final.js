import React, { useEffect, useState } from "react";
import {data} from '../utils/constant'

const Final = () => {
  const [activeInd, setActiveInd] = useState(0);

  const handleClickNext = () => {
    setActiveInd((activeInd + 1) % data.length);
    // (activeInd=== (data.length-1)) ? setActiveInd(0) : setActiveInd(activeInd+1);
  };

  const handleClickPrev = () => {
    setActiveInd(!activeInd ? data.length - 1 : activeInd + 1);
    // (activeInd===0) ? setActiveInd(data.length-1) : setActiveInd(activeInd-1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClickNext();
    }, 3000);

    return() => {
      clearTimeout(timer);
    }
  }, [activeInd]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleClickPrev}
        className="font-bold p-3 m-10 border-2 border-black"
      >
        Prev
      </button>
      {data.map((url, i) => (
        <img
          key={url}
          className={"w-80 h-96 " + (activeInd === i ? "block" : "hidden")}
          src={url}
          alt="img"
        />
      ))}
      <button
        onClick={handleClickNext}
        className="font-bold p-3 m-10 border-2 border-black"
      >
        Next
      </button>
    </div>
  );
};

export default Final;

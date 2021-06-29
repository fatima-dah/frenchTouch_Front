import React from "react";
import "./Calendar.css";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
 

  return (
    <div>
      <div className="calendlyCart ">
        <InlineWidget style=" height: auto;
    overflow: hidden;" url="https://calendly.com/mfmfrenchtouch"  />
      </div>
    </div>
  );
};

export default Calendar;

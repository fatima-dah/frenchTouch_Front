import React from "react";
import "./Calendar.css";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="calendlyCart App">
        <InlineWidget className="" url="https://calendly.com/dahnini-fatima" />
      </div>
    </div>
  );
};

export default Calendar;

import React from "react";
import "./Calendar.css";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div >
      <InlineWidget
        className="Calendly"
        url="https://calendly.com/dahnini-fatima"
      />
    </div>
  );
};

export default Calendar;

import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/dahnini-fatima" />
    </div>
  );
};

export default Calendar;


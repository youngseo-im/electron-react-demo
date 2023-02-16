import Calendar from "react-calendar";
import { useState } from "react";

import "react-calendar/dist/Calendar.css";
import "./TodoCalendar.css";
const TodoCalendar = () => {
  const [value, onChange] = useState(new Date());

  return <Calendar onChange={onChange} value={value} />;
};

export default TodoCalendar;

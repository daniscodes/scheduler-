import React from "react";

import "components/DayListItem.scss"
import DayListItem from "./DayListItem";

export default function (props) {

  return (
    <ul>
      {props.days.map((day) =>
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.day}
          setDay={props.setDay}
        />
      )}
    </ul>
  )
}
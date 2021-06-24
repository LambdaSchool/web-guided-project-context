import React from "react"

export default function Button = (props) => {
  return (
    <button
      className={`family-button ${props.family.familyName ===
        activeFamily.familyName && "active"}`}
      key={props.familyName}
      onClick={() => setActiveFamily(props.family)}
    >
      {props.family.familyName}
    </button>
      )
}

import React from "react"

export default function Button = (props) => {
  return (
    <button
      className={`family-button ${props.family.familyName ===
        activeFamily.familyName && "active"}`}
      key={props.familyName}
      onClick={() => props.setActiveFamily(props.family)}
    >
      {props.family.familyName}
    </button>
      )
}

// Props needed for this to work:
// family, activeFamily (read)
// setActiveFamily (write)
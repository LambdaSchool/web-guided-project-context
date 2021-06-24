import React from "react"

const FamilyButton = (props) => {
  return (
    <>
    <button
      className={`family-button ${props.family.familyName ===
        activeFamily.familyName && "active"}`}
      key={props.familyName}
      onClick={() => props.setActiveFamily(props.family)}
    >
      {props.family.familyName}
      </button>
    </>
  )
}

export default FamilyButton;

// Props needed for this to work:
// family, activeFamily (read)
// setActiveFamily (write)
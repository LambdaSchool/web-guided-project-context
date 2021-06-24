import React, { useContext } from "react"
import FamilyContext from "../contexts/FamilyContext";

const FamilyButton = (props) => {
  const { activeFamily, setActiveFamily } = useContext(FamilyContext);
  return (
    <>
    <button
      className={`family-button ${props.family.familyName ===
        activeFamily.familyName && "active"}`}
      key={props.family.familyName}
      onClick={() => setActiveFamily(props.family)}
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
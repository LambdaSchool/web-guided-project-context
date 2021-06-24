import React, { useContext } from "react"
import FamilyContext from "../contexts/FamilyContext";

const FamilyButton = (props) => {
  const { activeFamily, setActiveFamily } = useContext(FamilyContext);
  const { family } = props;
  return (
    <>
    <button
      className={`family-button ${family.familyName ===
        activeFamily.familyName && "active"}`}
      key={family.familyName}
      onClick={() => setActiveFamily(family)}
    >
      {family.familyName}
      </button>
    </>
  )
}

export default FamilyButton;

// Props needed for this to work:
// family, activeFamily (read)
// setActiveFamily (write)
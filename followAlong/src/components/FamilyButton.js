import React, { useContext } from "react"
import FamilyContext from "../contexts/FamilyContext";

const FamilyButton = (props) => {
  const { activeFamily } = useContext(FamilyContext).state; // like useSelector
  const dispatch = useContext(FamilyContext).dispatch; // like useDispatch
  const { family } = props;
  return (
    <>
    <button
      className={`family-button ${family.familyName ===
        activeFamily.familyName && "active"}`}
      key={family.familyName}
        onClick={() => dispatch({type: "SET_ACTIVE_FAMILY", payload: family})}
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
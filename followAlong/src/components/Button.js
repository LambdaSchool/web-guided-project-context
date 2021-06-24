import React from "react"

export default function Button = (props) => {
  return (
    <button
      className={`family-button ${d.familyName ===
        activeFamily.familyName && "active"}`}
      key={d.familyName}
      onClick={() => setActiveFamily(d)}
    >
      )
}

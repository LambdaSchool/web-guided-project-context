import React, { useContext } from "react";
import FamilyContext from "../contexts/FamilyContext";

import Parents from "./Parents";
import Siblings from "./Siblings";

// Step 3: consume the context in each component
// (this is similar to what we do with connect or React Redux hooks)

export default function FamilyTree(props) {
  const family = useContext(FamilyContext).activeFamily;
  return (
    <section className="FamilyTree">
      <h1>{family.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings family={family} />
    </section>
  );
}

import React, { useState } from "react";
import FamilyButton from "./components/FamilyButton";
import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";
import FamilyContext from "./contexts/FamilyContext";

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  // Step 2: Provide the contenxt by wrapping Context.Provider around the subtree of components (aka the context) in which this shared state is relevant
  return (
    <div className="App">
      <FamilyContext.Provider value={{activeFamily, setActiveFamily, families}}>
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(d => (
          <FamilyButton key={d.familyName} family={d} />
        ))}
      </section>
      {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}
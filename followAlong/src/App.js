import React, { useState } from "react";

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
      <FamilyContext.Provider>
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(d => (
          <button
            className={`family-button ${d.familyName ===
              activeFamily.familyName && "active"}`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>
    </div>
  );
}
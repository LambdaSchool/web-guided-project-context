import React from "react";
import FamilyContext from "../contexts/FamilyContext";

class Siblings extends React.Component {
  render() {
    return (
      <section className="parents">
        <FamilyContext.Consumer>
          {value => (
            <>
              {value.activeFamily.siblings.map((p) => (
                <div className="person" key={p.name}>
                  <img width="150" src={p.img} alt={p.name} />
                  <strong>{p.name}</strong>
                </div>
              ))}
            </>
        )
          }
        </FamilyContext.Consumer>
      </section>
    );
  }
};

export default Siblings;

// Render props pattern: pull the value from the context with Context.Consumer and use that value in order to remder a bit of JSX

// useContext allows a much nicer interface, but only works for function components becuase it is a React hook!
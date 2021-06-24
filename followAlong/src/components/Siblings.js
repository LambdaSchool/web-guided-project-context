import React from "react";
import FamilyContext from "../contexts/FamilyContext";

class Siblings extends React.Component {
  render() {
    return (
      <section className="parents">
        < FamilyContext
        {this.props.family.siblings.map((p) => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))}
      </section>
    );
  }
};

export default Siblings;
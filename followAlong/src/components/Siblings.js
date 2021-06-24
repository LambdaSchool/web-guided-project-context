import React from "react";

class Siblings extends React.Component {
  render() {
    return (
      <section className="parents">
        {props.family.siblings.map((p) => (
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
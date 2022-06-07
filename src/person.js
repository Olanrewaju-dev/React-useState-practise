import React from "react";

const Person = ({ img, name, weddingAnniversary }) => {
  return (
    <>
      <section className="person-container">
        <img
          className="person-img"
          style={{ width: "75px", height: "75px", borderRadius: "50%" }}
          src={img}
          alt=""
        ></img>
        <div>
          <h1>{name}</h1>
          <p>{weddingAnniversary}</p>
        </div>
      </section>
    </>
  );
};

export default Person;

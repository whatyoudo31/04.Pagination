import React from "react";

const Qualitie = ({ color, name }) => {
  return (
    <div style={{ margin: "5px" }} className={"badge bg-" + color}>
      {name}
    </div>
  );
};

export default Qualitie;

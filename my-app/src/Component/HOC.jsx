import React from "react";

function HOC() {
  return (
    <>
      <div>Examples of Higher order components are</div>
      <UpdatedCom name={"Naveen"} />
      <UpdatedCom name={" Kumar"} />
      <UpdatedCom name={" Singh"} />
    </>
  );
}
export default HOC;

const UpdatedCom = (props) => {
  return (
    <>
      <div className="bg-info">{props.name}</div>
    </>
  );
};


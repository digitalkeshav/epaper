import React from "react";
import Postsdetail from "../Postsdetail";
import Right from "../Right";
const Postimagedetail = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1" />
        <div className="col-8">
          <Postsdetail />
        </div>
        <div className="col">
          <Right />
        </div>
      </div>
    </div>
  );
};
export default Postimagedetail;

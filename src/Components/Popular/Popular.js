import React from "react";
import moment from "moment";
const Popular = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col h6">{props.title}</div>
      </div>
      <div className="row">
        <div className="col">
          <img src={props.imageurl} width="100%" />
        </div>
      </div>
      <div className="row pb-4">
        <div className="col">{ moment(props.postdate).format('MMMM Do YYYY, H:mm ')}</div>
      </div>
    </div>
  );
};
export default Popular;

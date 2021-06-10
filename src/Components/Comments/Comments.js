import React from "react";
const Comments = (props) => {
  return (
    
      <div class="container">
        <div className="row">
          <div className="col text-center font-weight-bold">
            <img src={props.imageurl} class="rounded-circle" />
            {props.title}
          </div>
          <div className="col">
            {props.description}
            <div className="container">
              <div className="row">
                <div className="col text-secondary">{props.postdate}</div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default Comments;

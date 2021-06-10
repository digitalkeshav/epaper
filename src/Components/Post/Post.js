import React from "react";
import moment from "moment";
const Post = (props) => {
  return (
    <div className="container">
      <div className="row pt-4 ">
        <div className="col display6 ">{ moment(props.postdate).format('MMMM Do YYYY, h:mm a')}
        </div>
      </div>
      <div className="row pt-2 pb-2">
        <div className="col h3">{props.title}</div>
      </div>
      <div className="row pt-4 pb-2">
        <div className="col">
           <a href={props.url}><img src={props.imageurl} width="100%" /></a>
        </div>
      </div>
      <div className="row pt-4 pb-4 border-bottom ">
        <div className="col">{props.description}</div>
      </div>
       
    </div>

  );
};
export default Post;

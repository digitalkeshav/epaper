import React from "react";
import { tagSelected } from "../../Redux/Action";
import { useDispatch } from "react-redux";

const Tags = (props) => {
  const dispatch = useDispatch();
  const localTagSelected = (title) => {
    dispatch(tagSelected(title));
  };
  let tagClass = props.isSelected
    ? "badge badge-success mx-1"
    : "badge badge-light mx-1";
  return (
    <a
      href="#"
      onClick={() => localTagSelected(props.title)}
      className={tagClass}
    >
      {props.title}
    </a>
  );
};

export default Tags;

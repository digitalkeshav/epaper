import React from "react";
import { useSelector } from "react-redux";

const ChatHeader = (props) => {
  const contact = useSelector((state) =>
    state.contacts.filter((contact) => contact.isSelected)
  );
  const chatDetails = contact[0];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src={chatDetails.imageurl}
              height="50px"
              alt=""
              className="rounded-circle border border-light"
            />
            <div className="pl-3 font-weight-bold text-light d-flex align-items-center">
              <span>{chatDetails.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;

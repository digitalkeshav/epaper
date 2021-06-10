import React from "react";
import Chatts from "./Chatts";
import ChatContacts from "./ChatContacts";
const MessageContainer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0 border-right ">
            <ChatContacts />
          </div>
          <div className="col p-0 bg-secondary" style={{ height: "670px" }}>
            <Chatts />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MessageContainer;

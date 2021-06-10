import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import InputMessage from "./InputMessage";
const Chatts = (props) => {
  const contact = useSelector((state) =>
    state.contacts.filter((contact) => contact.isSelected)
  );
  const selectedContact = contact[0];
  const messages = useSelector((state) => {
    return state.messages.filter(
      (message) => message.recipient === selectedContact.title
    );
  });
  const chatComponent = (chatDetail) => {
    return (
      <React.Fragment>
        <div className="container bg-secondary my-2">
          <div className="row">
            <div className="col">
              <div className="bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col py-2">
                      <div
                        className={`d-flex ${
                          chatDetail.isFromMe ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="px-1">
                          <img
                            src={chatDetail.imageurl}
                            className="rounded-circle"
                            height="50px"
                            alt=""
                          />
                        </div>
                        <div className="px-1">{chatDetail.content}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderChats = () => {
    return messages.map((chatDetail) => {
      return chatComponent(chatDetail);
    });
  };

  return (
    <div className="d-flex flex-column" style={{ height: "670px" }}>
      <div className="bg-info py-2">
        <ChatHeader />
      </div>
      <div className="overflow-auto">{renderChats()}</div>
      <div className="mt-auto">
        <InputMessage recipient={selectedContact.title} />
      </div>
    </div>
  );
};
export default Chatts;

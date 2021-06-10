import React from "react";
import { contactSelected, showContactScreen } from "../../Redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NewContact from "./NewContact";
const ChatContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const rowSelected = (contact) => {
    console.log(contact);
  };
  const handleNewContact = () => {
    dispatch(showContactScreen(true));
  };
  const rendercontacts = () => {
    return contacts.map((contact) => {
      return (
        <li
          className={`list-group-item ${
            contact.isSelected ? "bg-success" : ""
          }`}
          onClick={() => dispatch(contactSelected(contact))}
        >
          <div className="container">
            <div className="row" onClick={() => rowSelected(contact)}>
              <div className="col-2">
                <img
                  src={contact.imageurl}
                  alt=""
                  className="rounded-circle border border-info"
                  height="50px"
                  width="50px"
                />
              </div>
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col">{contact.title}</div>
                  </div>
                  <div className="row">
                    <div className="col">{contact.postdate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="container">
      <NewContact />
      <div className="row bg-info">
        <div className="col d-flex py-3 mb-2 justify-content-between">
          <div>Contacts</div>
          <div
            className="border border-light px-2"
            onClick={() => handleNewContact()}
          >
            +
          </div>
        </div>
      </div>
      <div className="row overflow-auto" style={{ height: "600px" }}>
        <div className="col p-0">
          <ul class="list-group list-group-flush overflow-auto">
            {rendercontacts()}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ChatContacts;

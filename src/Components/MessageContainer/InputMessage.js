import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessageAdded } from "../../Redux/Action";

const InputMessage = (props) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessagePressed = () => {
    dispatch(
      newMessageAdded({
        userName: "Lucy",
        imageurl: "https://milo.bootlab.io/img/avatars/3.png",
        postdate: "8 months ago",
        content: message,
        isFromMe: true,
        recipient: props.recipient,
      })
    );
    setMessage("");
  };

  return (
    <div className="bg-light border border-primary p-2">
      <div className="input-group">
        <input
          type="text"
          name="inputMessage"
          className="form-control"
          value={message}
          placeholder="Enter Message ..."
          onChange={(event) => handleInputChange(event)}
        />
        <div class="input-group-append">
          <button
            className="btn btn-primary text-light btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => sendMessagePressed()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputMessage;

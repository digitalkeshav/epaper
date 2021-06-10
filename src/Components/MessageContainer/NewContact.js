import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showContactScreen, newContactAdded } from "../../Redux/Action";
const NewContact = (props) => {
  const [username, setUsername] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showContactModal);
  const newContactSubmitted = (event) => {
    event.preventDefault();
    dispatch(
      newContactAdded({
        title: username,
        imageurl: imageURL,
        postdate: "8 months ago",
      })
    );
    dispatch(showContactScreen(false));
  };
  const newContactModal = () => {
    return (
      <div
        className={`modal fade  ${showModal ? "show" : ""}`}
        style={{
          display: `${showModal ? "block" : "none"}`,
          backgroundColor: "rgba(10, 10, 10, 0.6)",
        }}
        id="WelcomeModal"
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          data-backdrop="static"
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="camera-box">
                <img alt="" src="/img/yellow-logo.svg" />
                <h5 className="modal-title" id="exampleModalLabel">
                  Welcome to the Cozy App!
                </h5>
              </div>
            </div>
            <div className="modal-body">
              <div>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={(event) => setImageURL(event.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => dispatch(showContactScreen(false))}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary float-right"
                    onClick={(event) => newContactSubmitted(event)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dismissModal = () => {
    dispatch(showContactScreen(false));
  };
  return <React.Fragment>{newContactModal()}</React.Fragment>;
};

export default NewContact;

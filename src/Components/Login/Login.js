import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showLoginScreen } from "../../Redux/Action";
const Login = (props) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showLoginModal);
  const renderFormBody = () => {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  const dismissModal = () => {
    dispatch(showLoginScreen(false));
    // setshowModal(false);
  };

  return (
    <div
      onClick={() => dismissModal()}
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
          <div className="modal-body">{renderFormBody()}</div>
        </div>
      </div>
    </div>
  );
};
export default Login;

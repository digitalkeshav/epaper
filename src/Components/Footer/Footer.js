import React from "react";
import FooterPosts from "./FooterPosts";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <div className="row pt-4">
            <div className="col h4 text-center ">
              Subscribe to our newsletter
            </div>
          </div>
          <div className="row">
            <div className="col text-center ">
              Join our monthly newsletter and never miss out on new stories and
              promotions.
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-3" />
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-dark font-weight-bold"
                    type="button"
                    font-weight-bold
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-3" />
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid mb-0 bg-dark p-0">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col p-0">
              <FooterPosts />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark">
          <div className="row p-0">
            <div className="col-3" />
            <div className="col bg-dark">
              <div className="d-flex justify-content-center py-3">
                <div className="float-left px-3  border-right  border-secondary">
                  <a href="#">
                    <font color="grey">PRIVACY POLICY</font>
                  </a>
                </div>
                <div className="float-left px-3 border-right border-secondary">
                  <a href="/home">
                    <font color="grey">TERMS</font>
                  </a>
                </div>
                <div className="float-left px-3  border-right border-secondary">
                  <a href="/home">
                    <font color="grey">FEEDBACK</font>
                  </a>
                </div>
                <div className="float-left px-3  border-right border-secondary ">
                  <a href="/home">
                    <font color="grey">ADVERTISE</font>
                  </a>
                </div>
                <div className="float-left px-3 ">
                  <a href="/contact">
                    <font color="grey">CONTACT</font>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3" />
          </div>
        </div>
        <div className="container-fluid bg-dark">
          <div className="row pt-2">
            <div className="col-3" />
            <div className="col border-top border-secondary"></div>
            <div className="col-3" />
          </div>
        </div>
        <div className="container-fluid bg-dark">
          <div className="row pb=0 text-center pt-2">
            <div className="col text-muted">
              <small>© MILO 2019</small>
            </div>
          </div>
          <div className="row  pb-4 text-center">
            <div className="col text-muted">
              <small>ALL RIGHTS RESERVED</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;

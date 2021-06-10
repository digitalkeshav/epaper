import React from "react";
import Routes from "../../Utility/Routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoginScreen } from "../../Redux/Action";
import { showMessagesScreen } from "../../Redux/Action";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Miro
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <Link to={Routes.home.path}>{Routes.home.title}</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to={Routes.about.path}>{Routes.about.title}</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to={Routes.posts.path}>{Routes.posts.title}</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to={Routes.contact.path}>{Routes.contact.title}</Link>
              </a>
            </li>
            <li class="nav-item float-right">
              <a class="nav-link" href="#">
                <Link to={Routes.messages.path}>{Routes.messages.title}</Link>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item float-right">
              <a
                class="nav-link"
                href="#"
                onClick={() => dispatch(showLoginScreen(true))}
              >
                {Routes.login.title}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Postimagedetail from "./Components/Postimagedetail";
import Home from "./Components/Home";
import Routes from "./Utility/Routes";
import NotFound from "./Components/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Login from "./Components/Login";
import Messages from "./Components/Messages";
import MessageContainer from "./Components/MessageContainer";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Login />
        <Messages/>
        <Router>
          <Header />
          <Switch>
            <Route path={Routes.about.path}>
              <About />
            </Route>
            <Route path={Routes.posts.path}>
              <Postimagedetail />
            </Route>
            <Route path={Routes.contact.path}>
              <Contact />
            </Route>
            <Route path={Routes.messages.path}>
              <MessageContainer />
            </Route>
            <Route exact path={Routes.home.path}>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <div className="py-2" />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

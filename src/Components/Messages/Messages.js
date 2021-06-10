import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showMessagesScreen } from "../../Redux/Action";
import Comments from "../Comments";

const Messages=(props)=>
{
    
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.showMessagesModal);
    const comments = [
    {
      title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      description:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
    },
    {
      title: "John",
      imageurl: "https://milo.bootlab.io/img/avatars/2.png",
      postdate: "7 months ago",
      description:
        "Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
    },
    {
      title: "Kim",
      imageurl: "https://milo.bootlab.io/img/avatars/1.png",
      postdate: "8 months ago",
      description:
        "Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.",
    },

    {
      title: "Paula",
      imageurl: "https://milo.bootlab.io/img/avatars/4.png",
      postdate: "9 months ago",
      description:
        "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.",
    },
  ];
  const rendercomments = () => {
    return comments.map((comment) => {
      return (
        <div className="row">
          <div className="col">
            <Comments
              postdate={comment.postdate}
              title={comment.title}
              imageurl={comment.imageurl}
              description={comment.description}
            />
          </div>
        </div>
      );
    });
  };
    const renderMessagesbody=()=>{
        return(
            <div>{rendercomments()}</div>

        )
    }
    const dismissModal = () => {
    dispatch(showMessagesScreen(false));
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
          <div className="modal-body">{renderMessagesbody()}</div>
        </div>
      </div>
    </div>
        
    
    )
}
export default Messages;
import React from "react";
import Postimage from "../Postimage";
import Comments from "../Comments";
const Postsdetail = () => {
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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Postimage />
        </div>
      </div>
      <div className="row pt-4">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </div>
      </div>
      <div className="row">
        <div className="col">
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim.
        </div>
      </div>
      <div className="row">
        <div className="col">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus.
        </div>
      </div>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </div>
      </div>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>Donec quam felis</li>
            <li>Consectetuer adipiscing</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Donec quam felis</li>
            <li>Consectetuer adipiscing</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Donec quam felis</li>
            <li>Consectetuer adipiscing</li>
          </ul>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus.
        </div>
      </div>
      <div className="row  pt-4 border-top">
        <div className="col">{rendercomments()}</div>
      </div>
      <div className="row pt-2">
        <div className="col h5 ">
        Write a response
        </div>
      </div>
      <div className="row">
         <div className="col form-group">
         
         <input type="text" placeholder="Your name" class="form-control"/>
         </div>
         <div className="col form-group">
         <form>
         <input type="text" placeholder="Your email" class="form-control"/> </form>
         </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Write a response..</textarea>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col ">
        
        <button type="button" class="btn btn-success font-weight-bold">PUBLISH</button>
          </div>

        </div>
      </div>

                
            
        
     
  );
};
export default Postsdetail;

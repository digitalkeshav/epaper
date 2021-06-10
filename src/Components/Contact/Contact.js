import React from "react";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row pt-4 pb-4">
          <div className="col-3" />
          <div className="col h1 text-center">Get in touch</div>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col h6">
                  Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                  tempus.
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <small>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla
                    vel, aliquet nec, vulputate eget, arcu. In enim justo,
                    rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                    dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate
                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                    vitae, eleifend ac, enim.
                  </small>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col">
                  <form>
                    <div className="form-group h6">
                      <label for="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control form-control-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                    <div class="form-group h6">
                      <label for="exampleInputEmail1">Company</label>
                      <input
                        type="text"
                        placeholder="Company"
                        className="form-control form-control-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>

                    <div class="form-group h6">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="form-control form-control-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>

                    <div class="form-group h6">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea
                        placeholder="Message"
                        className="form-control form-control-sm"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success font-weight-bold rounded-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Contact;

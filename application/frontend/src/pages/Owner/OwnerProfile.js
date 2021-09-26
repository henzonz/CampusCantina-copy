import React from "react";
import restaurantcartoon from "../../assets/img/restaurant_ex.jpeg";
//import "../../index.css";
import "../../assets/css/index.css";

const OwnerProfile = () => {
  return (
    <div className="container-fluid">
      <br />
      <div className="text-center">
        <h3> Profile </h3>
      </div>
      <div className="editprofile">
        {/* pending approval alert*/}
        <div
          class="alert alert-warning alert-dismissible fade show text-center pending-alert"
          role="alert"
        >
          <strong> PENDING ADMIN APPROVAL WITHIN 24 HOURS </strong>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          class="alert alert-warning alert-dismissible fade show text-center live-alert"
          role="alert"
        >
          <strong> Your restaurant is now live! </strong>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* content header */}
        <div className="border-bottom my-3 text-center">
          <div className="row text-left">
            <div class="col-7">
              <label for="name">
                {" "}
                <strong>Bob's Burgers </strong>
              </label>
            </div>
            <div class="col text-right">
              <label for="name"> American, Burger, $</label>
            </div>
          </div>
        </div>

        {/* content body */}
        <div class="profile-content">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <label className="form-descrip">
                    <strong>Restaurant Owner</strong>
                  </label>
                </div>
                <div class="col">
                  <label for="name"> Bob Jones </label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label className="form-descrip">
                    <strong>Contact</strong>
                  </label>
                </div>
                <div class="col">
                  <label for="phone">(415)555-5555</label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label className="form-descrip">
                    <strong>Email</strong>
                  </label>
                </div>
                <div class="col">
                  <label for="email">owner1@gmail.com</label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label className="form-descrip">
                    <strong>Restaurant Address</strong>
                  </label>
                </div>
                <div class="col">
                  <label for="address">
                    562 Random St, San Francisco, CA 94123
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label className="form-descrip">
                    <strong>Marketing Post</strong>
                  </label>
                </div>
                <div class="col">
                  <label for="marketing">Save $5 on first 5 orders! </label>
                </div>
              </div>
            </div>
            <div class="col-6">
              <img
                src={restaurantcartoon}
                class="rounded img-thumbnail restImage"
                alt="Restaurant Img"
                width="300"
              />
            </div>
          </div>
          {/* edit icon */}
          <br />
          <div class="text-center">
            <a className="edit-btn" href="/owner/editprofile">
              <i className="far fa-edit " aria-hidden="true"></i> Edit{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;

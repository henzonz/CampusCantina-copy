import React from "react";
import "../../assets/css/ownerlayout.css";
//import "../../index.css";
import "../../assets/css/index.css";

const OwnerEditProfile = () => {
  return (
    <div class="container-fluid">
      <br />
      {/* Header */}
      <div className="text-center">
        <h3> Edit Profile </h3>
      </div>
      {/* form content*/}
      <form className="editprofile form-control">
        <input
          className="profile-input"
          id="redirect-input"
          type="hidden"
          name="redirect"
        />
        <div className="row">
          <div class="col-8">
            <label for="restaurant-name">
              {" "}
              <strong>Restaurant Name</strong>
            </label>
            <input
              type="text"
              id="restaurant-name"
              required
              class="form-control"
              placeholder="Ex: Sally's Sandwiches"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-8">
            <label for="name">
              {" "}
              <strong>Name</strong>
            </label>
            <div class="w-100" />
            <input
              type="text"
              id="name"
              maxlength="20"
              required
              class="form-control"
              placeholder="John Doe"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-5">
            <label for="phone">
              <strong>Contact Info</strong>
            </label>
            <div class="w-100" />
            <input
              type="tel"
              id="phone"
              class="form-control"
              required
              placeholder="xxx-xxx-xxxx"
              maxlength="10"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-8">
            <label for="name">
              {" "}
              <strong>Email</strong>
            </label>
            <div class="w-100" />
            <input
              type="email"
              maxlength="30"
              required
              class="form-control"
              placeholder="email@address.com"
            />
          </div>
        </div>
        <br />
        <label for="address">
          <strong>Restaurant Address</strong>
        </label>
        <input
          type="text"
          id="address"
          required
          class="form-control"
          placeholder="123 Street Name"
        />
        <br />
        <label for="img">
          <strong>Restaurant Image</strong>
        </label>
        <input type="file" id="img" class="form-control" />
        <br />
        <label for="food">
          <strong>Cuisine</strong>
        </label>
        <input
          class="form-control"
          type="text"
          id="food"
          required
          placeholder="Ex: American"
        />
        <br />
        <label for="tags">
          <strong>Food tags</strong>
        </label>
        <input
          class="form-control"
          type="text"
          id="tags"
          placeholder="Burgers, fries, wings"
        />
        <br />
        <div class="row">
          <div class="col-4">
            <label for="price">
              <strong>Restaurant Pricing</strong>
            </label>
          </div>
          <div class="col">
            <div
              class="btn-group btn-group-toggle price-button"
              data-toggle="buttons"
            >
              <label class="btn btn-secondary active">
                <input type="radio" name="price" autoComplete="off" checked /> $
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="price" autoComplete="off" /> $$
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="price" autoComplete="off" /> $$$
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="price" autoComplete="off" /> $$$$
              </label>
            </div>
          </div>
        </div>
        <br />
        <label for="post">
          <strong>Marketing Post</strong>
        </label>
        <textarea class="form-control" rows="3" placeholder="Announcements" />
        <br />
        {/* footer buttons */}
        <div class="row">
          <div class="col">
            <button
              type="submit"
              class="btn save-btn btn-lg btn-block"
              value="Submit"
            >
              {" "}
              Save{" "}
            </button>
          </div>
          <div class="col">
            <a class="text-white cancel-btn" href="/owner/profile">
              <button
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                value="Cancel"
              >
                {" "}
                Cancel{" "}
              </button>
            </a>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

export default OwnerEditProfile;

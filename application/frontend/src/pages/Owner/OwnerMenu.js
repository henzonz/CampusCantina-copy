import React from "react";
import "../../assets/css/about_individual.css";

const OwnerMenu = () => {
  const items = [
    { id: "1", name: "Burger", price: "$12" },
    { id: "2", name: "Fries", price: "$5" },
    { id: "3", name: "Milkshake", price: "$7" },
    { id: "4", name: "Chicken Tenders", price: "$8" },
  ];
{/* Renders each row for Menu Table */}
  const renderMenuItem = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <i
            className="fas fa-pen menu-icon "
            aria-hidden="true"
            data-toggle="modal"
            data-target="#editItem"
          />
        </td>
        <td>
          <i className="fas fa-trash menu-icon" aria-hidden="true" />
        </td>
      </tr>
    );
  };

  return (
    <div className="container-fluid text-center">
      <br />
      <h3> Menu </h3>
      <div class="panel-default">
        <table class="table">
          {/* Table Header */}
          <thead class="table-header-menu">
            <tr>
              <th scope="col"> Item # </th>
              <th scope="col"> Item Name </th>
              <th scope="col"> Price </th>
              <th scope="col" />
              <th scope="col" class="text-right">
                <i
                  className="fas fa-plus menu-icon-plus"
                  data-toggle="modal"
                  aria-hidden="true"
                  data-target="#addItem"
                ></i>
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>{items.map(renderMenuItem)}</tbody>
        </table>
      </div>
      {/* Add Item Modal */}
      <div
        class="modal fade"
        id="addItem"
        data-backdrop="static"
        role="dialog"
        aria-labelledby="addItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              {" "}
              Add Menu Item
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body*/}
            <div class="modal-body modal-edit">
              <form className="editItem">
                <input
                  className="edit-menu-input"
                  id="redirect-input"
                  type="hidden"
                  name="redirect"
                />
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Item Name </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemName"
                      maxlength="20"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Price </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      id="itemPrice"
                      maxlength="3"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                >
                  {" "}
                  Update{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Item Modal */}
      <div
        class="modal fade"
        id="editItem"
        role="dialog"
        aria-labelledby="editItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              {" "}
              <strong> Edit Item</strong>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body*/}
            <div class="modal-body modal-edit">
              <form className="editItem">
                <input
                  className="edit-menu-input"
                  id="redirect-input"
                  type="hidden"
                  name="redirect"
                />
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Item Name </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemName"
                      maxlength="20"
                      required
                      class="form-control"
                      value="Burger"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Price </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      id="itemPrice"
                      maxlength="3"
                      required
                      class="form-control"
                      value="$12"
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                >
                  {" "}
                  Update{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerMenu;


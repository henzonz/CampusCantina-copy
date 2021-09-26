/*
Summary of DriverAvailableOrders.js: 
 - Renders on '/driver/orderhistory'
 - to load when clicked on Order History on the Sidebar for Drivers' login
 - View button is a modal to display the order details
*/
import React from 'react';
import '../assets/css/driver.css';

function viewOrder() {
  var popup = document.getElementById('viewOrder');
  popup.classList.toggle('show');
}

const DriverAvailableOrders = () => {
  return (
    <div className="container text-center">
      <div className="order_header h3 text-white text-center py-2">
        Order History
      </div>

      <table className="table table_order">
        <thead>
          <tr>
            <th className="border border_header">
              <span className="font-italic"> Order ID</span>
            </th>
            <th className="border border_header">
              <span className="font-italic">Customer Name</span>
            </th>
            <th className="border border_header">
              <span className="font-italic">Order Total</span>
            </th>
            <th className="border border_header">
              <span className="font-italic">Order Status</span>
            </th>
            <th className="border border_header">
              <span className="font-italic">Order Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border_body">#111125</th>
            <td className="border border_body">
              Will Smith
              <br /> (415) 123 4567
            </td>
            <td className="border border_body">&#36;50</td>
            <td className="border border_body">
              <span className="text-info font-italic">Completed</span>
            </td>
            <td className="border border_body">
              <button
                type="button"
                className="btn btn-warning btn-sm border border_header"
                data-toggle="modal"
                data-target="#viewOrder1"
              >
                View
              </button>
            </td>
          </tr>

          <tr>
            <th className="border border_body">#111124</th>
            <td className="border border_body">
              Robert
              <br /> (415) 555 5554
            </td>
            <td className="border border_body">&#36;40</td>
            <td className="border border_body">
              <span className="font-italic text-info">Completed</span>
            </td>
            <td className="border border_body">
              <button
                type="button"
                className="btn btn-warning btn-sm border border_header"
                data-toggle="modal"
                data-target="#viewOrder2"
              >
                View
              </button>
            </td>
          </tr>

          <tr>
            <th className="border border_body">#111119</th>
            <td className="border border_body">
              Jack
              <br /> (415) 535 5554
            </td>
            <td className="border border_body">&#36;20</td>
            <td className="border border_body">
              <span className="font-italic text-info">Completed</span>
            </td>
            <td className="border border_body">
              <button
                type="button"
                className="btn btn-warning btn-sm border border_header"
                data-toggle="modal"
                data-target="#viewOrder3"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* View order 1 */}
      <div
        class="modal fade"
        id="viewOrder1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewOrderTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewOrderTitle">
                Order Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Items </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Price </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th> Burrito</th>
                    <th> 2 </th>
                    <th> &#36; 24 </th>
                  </tr>
                  <tr>
                    <th>Lemonade</th>
                    <th>1</th>
                    <th>&#36; 4.99</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* View order 2 */}
      <div
        class="modal fade"
        id="viewOrder2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewOrderTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewOrderTitle">
                Order Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Items </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Price </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th> Pho combination</th>
                    <th> 1 </th>
                    <th> &#36; 15 </th>
                  </tr>
                  <tr>
                    <th>Thai Iced Tea</th>
                    <th>1</th>
                    <th>&#36; 4.50</th>
                  </tr>
                  <tr>
                    <th>Egg rolls</th>
                    <th>1</th>
                    <th>&#36; 6.50</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* View order 3 */}
      <div
        class="modal fade"
        id="viewOrder3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewOrderTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewOrderTitle">
                Order Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Items </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Price </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th> Burger</th>
                    <th> 1 </th>
                    <th> &#36; 8.50 </th>
                  </tr>
                  <tr>
                    <th>Coca Cola</th>
                    <th>1</th>
                    <th>&#36; 2.50</th>
                  </tr>
                  <tr>
                    <th>Sweet Potato Fries</th>
                    <th>1</th>
                    <th>&#36; 4.50</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverAvailableOrders;

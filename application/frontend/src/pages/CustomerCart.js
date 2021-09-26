import React, { useEffect } from 'react';
import '../assets/css/customer_cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCartItems,
  setCartItemsTotalCount,
  setCartTotal,
  setCartDeliveryInstructions,
  setCartDeliveryFee,
} from '../redux/actions/cartItemsActions';

const CustomerCart = () => {
  const dispatch = useDispatch();
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  const cartItemsTotalCount = useSelector(
    (state) => state.cartItemsReducer.cartItemsTotalCount
  );
  const cartTotal = useSelector((state) => state.cartItemsReducer.cartTotal);
  const cartDeliveryInstructions = useSelector(
    (state) => state.cartItemsReducer.cartDeliveryInstructions
  );
  const cartDeliveryFee = useSelector(
    (state) => state.cartItemsReducer.cartDeliveryFee
  );

  return (
    <>
      {cartItems.length == 0 ? (
        <li style={{ marginTop: '10px' }}>
          <span className=" p-2 m-1 h5">Your Cart is empty</span>
          <p className="primary-color p-2 m-1">Add items to get started</p>
        </li>
      ) : (
        <div className="small-container text-center mt-2">
          <p className="h6 font-weight-bold">
            Total Count: {cartItemsTotalCount}
          </p>
          <table className="table table-light border">
            <thead>
              <tr>
                <th className="font-italic">Product</th>
                <th className="font-italic">Quantity</th>
                <th className="font-italic"></th>
                <th className="font-italic">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <th scope="row">
                    {item.itemName}&#160;&#160;
                    <i
                      className="fas fa-comment-dots secondary-color cart-icons"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={item.itemComments}
                    />
                  </th>
                  <td>
                    <i
                      className="mr-2 primary-color fa fa-minus-circle cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        if (item.itemCount >= 2) {
                          temp_element.itemCount = item.itemCount - 1;
                          temp_element.itemCalculatedPrice = (
                            temp_element.itemCount * temp_element.itemPrice
                          ).toFixed(2);
                          dispatch(
                            setCartItemsTotalCount(cartItemsTotalCount - 1)
                          );
                          const tempCartTotal = (
                            parseFloat(cartTotal) -
                            parseFloat(temp_element.itemPrice)
                          ).toFixed(2);
                          dispatch(setCartTotal(tempCartTotal));
                        }
                        temp[i] = temp_element;
                        dispatch(setCartItems(temp));
                      }}
                    />
                    <span className="text-center">{item.itemCount}</span>
                    <i
                      className="ml-2 primary-color fa fa-plus-circle cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        if (item.itemCount < 9) {
                          temp_element.itemCount = item.itemCount + 1;
                          temp_element.itemCalculatedPrice = (
                            temp_element.itemCount * temp_element.itemPrice
                          ).toFixed(2);
                          dispatch(
                            setCartItemsTotalCount(cartItemsTotalCount + 1)
                          );
                          const tempCartTotal = (
                            parseFloat(cartTotal) +
                            parseFloat(temp_element.itemPrice)
                          ).toFixed(2);
                          dispatch(setCartTotal(tempCartTotal));
                        }
                        temp[i] = temp_element;
                        dispatch(setCartItems(temp));
                      }}
                    />
                  </td>
                  <td>
                    <i
                      className="text-danger fas fa-trash cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        dispatch(
                          setCartItemsTotalCount(
                            cartItemsTotalCount - temp_element.itemCount
                          )
                        );
                        const tempCartTotal = (
                          parseFloat(cartTotal) -
                          parseFloat(temp_element.itemCalculatedPrice)
                        ).toFixed(2);
                        dispatch(setCartTotal(tempCartTotal));
                        temp.splice(i, 1);
                        dispatch(setCartItems(temp));
                        // set delivery fee in the cart
                        const cartRestaurantsList = [
                          ...new Set(
                            temp.map((item) => item.itemRestaurantName)
                          ),
                        ];
                        let tempDeliveryFee = 0.0;
                        let filteredCartRestaurants = [];
                        for (let i = 0; i < cartRestaurantsList.length; i++) {
                          const tempCurrentRestaurant = restaurantsList.filter(
                            (restaurant) =>
                              restaurant.Name == cartRestaurantsList[i]
                          );
                          filteredCartRestaurants.push(tempCurrentRestaurant);
                        }
                        for (
                          let i = 0;
                          i < filteredCartRestaurants.length;
                          i++
                        ) {
                          tempDeliveryFee +=
                            filteredCartRestaurants[i][0].Delivery_Fee;
                        }
                        dispatch(
                          setCartDeliveryFee(tempDeliveryFee.toFixed(2))
                        );
                      }}
                    />
                  </td>
                  <td>
                    &#36;
                    {item.itemCalculatedPrice === 0.0 ? (
                      <span>{item.itemPrice}</span>
                    ) : (
                      <span>{item.itemCalculatedPrice}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card">
            <div className="card-body">
              <span>Delivery Instructions: </span>
              <textarea
                className="w-100"
                value={cartDeliveryInstructions}
                onChange={(e) => {
                  dispatch(setCartDeliveryInstructions(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="px-4">
            <table className="col text-center">
              <tbody>
                <tr>
                  <td className="h6 text-left py-1">Cart Total: </td>
                  <td className="h6 text-right">${cartTotal}</td>
                </tr>
                <tr>
                  <td className="h6 text-left py-1">Tax Amount (10%): </td>
                  <td className="h6 text-right">
                    ${(0.1 * parseFloat(cartTotal)).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="h6 text-left py-1">Delivery Fee</td>
                  <td className="h6 text-right">${cartDeliveryFee}</td>
                </tr>
                <tr>
                  <td className="h5 text-left py-1">Order Total:</td>
                  <td className="h5 text-right">
                    $
                    {(
                      parseFloat(cartTotal) +
                      parseFloat(0.1 * parseFloat(cartTotal))
                    ).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col text-center py-3">
            <Link to="/checkout" className="checkout-link">
              <button
                type="button"
                className="checkout_btn btn btn-lg btn-block text-white"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default CustomerCart;

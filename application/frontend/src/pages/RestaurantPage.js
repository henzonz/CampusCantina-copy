/*
Summary of RestaurantPage.js: 
 - Renders on '/restaurantpage'
 - to load when the restaurant item is clicked
 - Components: Google Map, Add Menu items Modal, Banner Image, Menu Items
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/restaurant_page.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Banner from '../assets/img/restaurant/Restaurant_Banner.jpg';
import Burger from '../assets/img/cuisines/Burger.png';
import Chinese from '../assets/img/cuisines/Chinese.png';
import Indian from '../assets/img/cuisines/Indian.png';
import Italian from '../assets/img/cuisines/Italian.png';
import Mexican from '../assets/img/cuisines/Mexican.png';
import Pizza from '../assets/img/cuisines/Pizza.png';
import Vietnamese from '../assets/img/cuisines/Vietnamese.png';
import {
  setCartItems,
  setCartItemsTotalCount,
  setCartTotal,
  setCartDeliveryFee,
} from '../redux/actions/cartItemsActions';
import MyMap from '../components/MyMap';
// import ReactDOM from 'react-dom';

const RestaurantPage = () => {
  const dispatch = useDispatch();
  // click on a restaurant card leads to a page with a particular restaurant name
  // passed as a parameter which is retrieved here
  const { clickedRestaurantName } = useParams();
  // menu items from backend
  const [menuItems, setMenuItems] = useState([]);
  // for getting the id of the menu item of which the add to cart icon is clicked
  const [addIdClicked, setAddIdClicked] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // modal content - auto updating
  const [itemComments, setItemComments] = useState('');
  const [itemCount, setItemCount] = useState(1);
  const [itemCalculatedPrice, setItemCalculatedPrice] = useState(0.0);

  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const currentRestaurant = restaurantsList.filter(
    (restaurant) => restaurant.Name.trim() === clickedRestaurantName.trim()
  );
  const currentRestaurantCuisine = currentRestaurant.map(
    (item, i) => item.Cuisine
  );

  if (showAlert) {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);

  useEffect(() => {
    let source = axios.CancelToken.source();
    // document.title = `CC - ${clickedRestaurantName}`;
    // get all restaurants from backend
    axios
      .get('http://localhost:3001/api/restaurant-menu/restaurant-menu-items', {
        params: { restaurantName: clickedRestaurantName },
        cancelToken: source.token,
      })
      .then((res) => setMenuItems(res.data))
      .catch((err) => err);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        {currentRestaurant.map((item, i) => (
          <img
            key={i}
            className="img-fluid restaurantBanner"
            src={
              'data:image/jpeg;base64,' + new Buffer(item.Display_Pic_Banner)
            }
            alt="Banner"
          />
        ))}
        <div className="m-2 d-flex justify-content-around flex-wrap">
          {currentRestaurant.map((item, i) => (
            <div className="m-2" key={i}>
              <div className="pl-1">
                <p className="primaryTextPage h1">{item.Name}</p>
                <mark className="font-weight-bold"> COVID-19 Safe </mark>
                <span className="openTag">OPEN </span>
                <p className="text-muted mt-2">
                  {item.Price_Level} • {item.Cuisine} <br />
                  {item.Tags} <br />
                  {item.Address} <br />
                </p>
              </div>
              <div className="rp-info secondaryTextPage">
                <table height="90px" className="mx-auto">
                  <tbody>
                    <tr>
                      <td className="align-middle primaryTextPage">
                        <p>
                          ${item.Delivery_Fee} <br /> delivery fee
                        </p>
                      </td>
                      <td className="align-middle p-3 primaryTextPage">
                        <p>
                          18-24 <br /> minutes
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="m-2 restaurant-home-map">
            {' '}
            <MyMap></MyMap>{' '}
          </div>
        </div>
      </div>

      <hr />
      <div className="container text-center">
        {/* to display cuisine images based on current restaurant's cuisine.. imported from CuisineRow */}
        <div className="m-4 ">
          <>
            {new String(currentRestaurantCuisine).valueOf() ===
            new String('Burgers').valueOf() ? (
              <img src={Burger} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Chinese').valueOf() ? (
              <img src={Chinese} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Indian').valueOf() ? (
              <img src={Indian} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Italian').valueOf() ? (
              <img src={Italian} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Mexican').valueOf() ? (
              <img src={Mexican} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Pizza').valueOf() ? (
              <img src={Pizza} alt="logo" height="55" className="rounded" />
            ) : new String(currentRestaurantCuisine).valueOf() ===
              new String('Vietnamese').valueOf() ? (
              <img
                src={Vietnamese}
                alt="logo"
                height="55"
                className="rounded"
              />
            ) : (
              <> </>
            )}
          </>
          {menuItems.length > 0 ? (
            <h4 className="text-center pb-3 pt-3">
              Choose from the Menu below
            </h4>
          ) : (
            <h4 className="text-center pb-3 pt-3">Menu Items not available</h4>
          )}
          {showAlert ? (
            <div
              className="text-center mx-auto mt-2 alert alert-success alert-dismissible fade show w-50"
              role="alert"
            >
              <strong>Success!</strong> Added Item to the Cart
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : (
            <> </>
          )}

          {menuItems.length > 0 ? (
            <div className="d-flex justify-content-around flex-wrap">
              {menuItems.map((item, i) => (
                <div key={i} className="card rp-item p-3 m-2">
                  <p>
                    <strong>{item.Name}</strong>
                    <br />
                    <span className="text-muted">{item.Description}</span>
                    <br />
                    <span>${item.Price}</span>
                  </p>
                  <i
                    className="fas fa-cart-plus h4 mt-2 add-cart-icon"
                    data-toggle="modal"
                    data-target="#modalCenter"
                    onClick={() => {
                      setShowModal(true);
                      setAddIdClicked(item.ID);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>
      {/* Modal */}
      {showModal ? (
        <div
          className="modal fade modal-div"
          id="modalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalCenterTitle"
          aria-hidden="true"
          data-backdrop="static"
          data-keyboard="false"
        >
          {menuItems
            .filter((item1) => item1.ID === addIdClicked)
            .map((item, i) => (
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                key={i}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLongTitle">
                      {item.Name}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={(e) => {
                        setShowModal(false);
                        setItemCount(1);
                        setItemCalculatedPrice(0.0);
                      }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <span className="text-muted">{item.Description}</span>
                    <p className="text-center mx-auto my-2">
                      Instructions to Chef
                    </p>
                    <div className="text-center">
                      <textarea
                        cols="30"
                        rows="2"
                        value={itemComments}
                        onChange={(e) => {
                          setItemComments(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="modal-footer justify-content-around">
                    <div>
                      <i
                        className="fa fa-minus mr-2 add-remove-icons"
                        aria-hidden="true"
                        onClick={(e) => {
                          let tempCount = itemCount;
                          if (tempCount >= 2) {
                            tempCount -= 1;
                          }
                          setItemCount(tempCount);
                          setItemCalculatedPrice(
                            (tempCount * item.Price).toFixed(2)
                          );
                        }}
                      />
                      <span className="m-1 px-2 h5 rounded bg-warning">
                        {itemCount}
                      </span>
                      <i
                        className="fa fa-plus ml-2  add-remove-icons"
                        aria-hidden="true"
                        onClick={(e) => {
                          let tempCount = itemCount;
                          if (tempCount < 9) {
                            tempCount += 1;
                          }
                          setItemCount(tempCount);
                          setItemCalculatedPrice(
                            (tempCount * item.Price).toFixed(2)
                          );
                        }}
                      />
                    </div>
                    <div>
                      {itemCalculatedPrice === 0.0 ? (
                        <span>Price: ${item.Price}</span>
                      ) : (
                        <span>Price: ${itemCalculatedPrice}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="btn primary-color-bg text-white"
                      data-dismiss="modal"
                      onClick={(e) => {
                        let tempCartItems = cartItems;
                        let itemCalculatedPriceorPrice = 0.0;
                        itemCalculatedPrice === 0.0
                          ? (itemCalculatedPriceorPrice = item.Price)
                          : (itemCalculatedPriceorPrice = itemCalculatedPrice);
                        const cartItem = {
                          itemName: item.Name,
                          itemPrice: item.Price,
                          itemCount: itemCount,
                          itemComments: itemComments,
                          itemCalculatedPrice: itemCalculatedPriceorPrice,
                          itemRestaurantName: clickedRestaurantName,
                        };
                        tempCartItems.push(cartItem);
                        dispatch(setCartItems(tempCartItems));
                        setShowModal(false);
                        setShowAlert(true);
                        setItemComments('');
                        setItemCount(1);
                        setItemCalculatedPrice(0.0);
                        // setting total items count in the cart
                        let tempCartItemsTotalCount = 0;
                        cartItems.forEach((element) => {
                          tempCartItemsTotalCount += element.itemCount;
                        });
                        dispatch(
                          setCartItemsTotalCount(tempCartItemsTotalCount)
                        );
                        // setting total cost in the cart
                        let tempCartTotal = 0.0;
                        cartItems.forEach((element) => {
                          // set the price to be calculated
                          let tempPrice = 0.0;
                          element.itemCalculatedPrice === 0.0
                            ? (tempPrice = element.itemPrice)
                            : (tempPrice = element.itemCalculatedPrice);
                          // console.log(tempPrice);
                          tempCartTotal = (
                            parseFloat(tempCartTotal) + parseFloat(tempPrice)
                          ).toFixed(2);
                        });
                        dispatch(setCartTotal(tempCartTotal));
                        // set delivery fee in the cart
                        const cartRestaurantsList = [
                          ...new Set(
                            cartItems.map((item) => item.itemRestaurantName)
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
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default RestaurantPage;

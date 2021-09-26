import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/all_restaurants.css';

const AllRestaurants = ({ results }) => {
  return (
    <div className="d-flex justify-content-around flex-wrap mt-4 restaurants-links">
      {results.map((item, i) => (
        <Link to={`/restaurant/${item.Name}`} key={i}>
          <div>
            <div className="card home-restaurant-card">
              <img
                src={
                  'data:image/jpeg;base64,' +
                  new Buffer(item.Display_Pic_Thumbnail)
                }
                alt=""
                width="350px"
                height="250px"
              />
              <div className="row">
                <div className="col">
                  <h5 className="text-align-left ml-2 mt-1 primary-color">
                    <strong>{item.Name}</strong>
                  </h5>
                </div>
                <div className="col">
                  <p className="float-right mr-2 primary-color">
                    Delivery Fee: ${item.Delivery_Fee}
                  </p>
                </div>
              </div>
              <div className="restaurants-price-tags">
                <span className="text-muted ml-2">
                  {item.Price_Level} • {item.Cuisine}, <br />
                  <span className="text-muted ml-2">{item.Tags}</span>
                  <br />
                  <span className="text-muted ml-2">{item.Address}</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllRestaurants;

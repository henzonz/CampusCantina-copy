import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setSearchResults,
  setSearchedCuisine,
} from '../redux/actions/searchActions';
import { useHistory } from 'react-router-dom';
import '../assets/css/cuisines.css';
import Burger from '../assets/img/cuisines/Burger.png';
import Chinese from '../assets/img/cuisines/Chinese.png';
import Indian from '../assets/img/cuisines/Indian.png';
import Italian from '../assets/img/cuisines/Italian.png';
import Mexican from '../assets/img/cuisines/Mexican.png';
import Pizza from '../assets/img/cuisines/Pizza.png';
import Vietnamese from '../assets/img/cuisines/Vietnamese.png';

const CuisineRow = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCuisineSearch = (cuisine) => {
    axios
      .get('http://localhost:3001/api/searchbar/search', {
        params: { searchTerm: '', cuisine: cuisine },
      })
      .then((res) => {
        let element = document.getElementById('root');
        element.scrollIntoView(true);
        dispatch(setSearchedCuisine(cuisine));
        dispatch(setSearchResults(res.data));
      })
      .then(() => {
        history.push('/cuisineresults');
      });
  };
  return (
    <div className="container mt-1">
      <h2 className="cuisine-section-heading">Cuisines</h2>
      <div className=" d-flex flex-wrap cuisine-section">
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Burgers')}
          >
            <img src={Burger} alt="logo" height="55" className="" />
            <br />
            Burgers
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Chinese')}
          >
            <img
              src={Chinese}
              alt="logo"
              height="65"
              className="chinese-cuisine"
            />
            <br />
            Chinese
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Indian')}
          >
            <img src={Indian} alt="logo" height="55" className="" />
            <br />
            Indian
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Italian')}
          >
            <img src={Italian} alt="logo" height="55" className="" />
            <br />
            Italian
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Mexican')}
          >
            <img src={Mexican} alt="logo" height="55" className="" />
            <br />
            Mexican
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Pizza')}
          >
            <img src={Pizza} alt="logo" height="55" className="" />
            <br />
            Pizza
          </button>
        </div>
        <div className="cuisine-link m-1">
          <button
            type="button"
            className="link-button"
            onClick={() => handleCuisineSearch('Vietnamese')}
          >
            <img src={Vietnamese} alt="logo" height="55" className="" />
            <br />
            Vietnamese
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuisineRow;

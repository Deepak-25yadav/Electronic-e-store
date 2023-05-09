import axios from 'axios';
import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = (paramObj, page, setTotal) => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  axios

    .get(`http://localhost:8080/products?_page=${page}&_limit=20`, paramObj)

    .then(res => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      // console.log(res.headers['x-total-count']);
      let value = res.headers['x-total-count'];
      console.log(value)
      setTotal(value);
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//https://gopi.onrender.com/products

export const singleProductfunc = id => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  console.log('sghdgassdj');
  return axios
    .get(`http://localhost:8080/products/${id}`)
    .then(res => {
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

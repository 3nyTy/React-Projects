import React from 'react';
import axios, { get } from 'axios';

const ROOT_URL = 'https://api.coinmarketcap.com/v2/listings/';

export const FETCH_MARKET_SHARES = 'FETCH_MARKET_SHARES';


  export function fetchShares() {
  const url = ROOT_URL;
 const request = axios.get(url);

 
  return {
    type : FETCH_MARKET_SHARES,
    payload: request
  };

 
}

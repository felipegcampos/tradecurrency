# Coinsquare Challenge

Please, note this code is not production ready and is meant to serve as a reference in developing and testing ReactJS applications using Redux.

## Instructions

 - Your account is pre-funded with $156.12 USD. User can trade with any amount
 - User can trade any amount up and equal to $156.12 USD
 - Fetch the market price of Bitcoin through the public API ( https://docs.bitfinex.com/docs/public-endpoints )
 - Calculate the quote based on the price of Bitcoin and the USD amount entered by the
user
 - Execute the “trade” when the Trade button is clicked and update with the new USD and
BTC account balance

## Installing
    npm install

## Running

### `npm run server`

Starts the node server ( HapiJS ) running on port 5000. It is **important** to start the server before starting the app.

### `npm run start`

Starts the app running on port 3000.

### `npm run test`

Run linter and then all available tests.
**Note**: There is no full coverage. There are 2 classes for reference on how to create tests for reducers and components. `src/components/AccountBalance.test.js` and `src/store/modules/trade/index.test.js` 

## Highlighted dependencies

 - HapiJS ( https://hapijs.com/ )
 - redux-actions ( https://github.com/redux-utilities/redux-actions )
 - recompose ( https://github.com/acdlite/recompose )
 - reselect ( https://github.com/reactjs/reselect )
 - bluebird ( http://bluebirdjs.com/ )
 - axios (https://github.com/axios/axios)

## Author
Felipe Gonçalves de Campos ( felipegcampos@gmail.com )
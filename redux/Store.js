const { configureStore } = require("@reduxjs/toolkit");
import shoppingCartReducer from '../redux/features/ShoppingCart/ShoppingCartSlice'
 export const Store= configureStore ({
    reducer:{
       shoppingCart: shoppingCartReducer,
    },
});

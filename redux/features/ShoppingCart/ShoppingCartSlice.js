import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { items: [], totalCount: 0, totalPrice: 0, totalpaid: 0 };

const recalculateTotals = (state) => {
  state.totalPrice = 0;
  state.totalpaid = 0;
  state.totalCount = state.items.length;
  state.items.map((item) => {
    state.totalpaid +=
      item.priceWithDiscount !== 0 ? item.priceWithDiscount : item.price;
    state.totalPrice += item.price;
  });
  return state;
};

const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addNewItem: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      return recalculateTotals(state);
    },
    increaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
        return item;
      });
      return recalculateTotals(state);
    },
    decreaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
        return item;
      });
      return recalculateTotals(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      return recalculateTotals(state);
    },
  },
});

export const { addNewItem, increaseCount, decreaseCount, removeItem } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

//intial state

const intialState = {
  count: 0,
};

export const CouterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    add: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, add } = CouterSlice.actions;
export default CouterSlice.reducer;

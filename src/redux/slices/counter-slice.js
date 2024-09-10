import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (state, action) => {
      state.value += 1;
    },
    dec: (state, action) => {
      state.value -= 1;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});

export const { inc, dec, reset } = counter.actions;
export default counter.reducer;

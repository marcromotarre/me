import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    addOne: (state) => {
      state.value = state.value + 1;
    },
    takeOne: (state) => {
      state.value = state.value - 1;
    },
    taksetValueeOne: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { addOne, takeOne } = counterSlice.actions;
export default counterSlice.reducer;

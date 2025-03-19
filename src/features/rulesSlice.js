import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    display: null,
  },
};

export const rulesSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {
    showRules: (state, action) => {
      state.value.display = action.payload;
    },
    hideRules: (state, action) => {
      state.value.display = action.payload;
    },
  },
});

export const { showRules, hideRules } = rulesSlice.actions;
export default rulesSlice.reducer;

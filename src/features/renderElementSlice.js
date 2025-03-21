import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    selectedId: null,
    randomId: Math.floor(Math.random() * 3) + 1,
    idArray: [1, 2, 3],
    scores: 0,
    gameResult: null,
    hasCheckedGame: false,
  },
};

export const renderElementSlice = createSlice({
  name: "renderElement",
  initialState,
  reducers: {
    render: (state, action) => {
      state.value.selectedId = action.payload;
    },
    randomRender: (state) => {
      if (state.value.selectedId) {
        state.value.randomId =
          state.value.idArray[
            Math.floor(Math.random() * state.value.idArray.length)
          ];
      }
    },
    checkGame: (state) => {
      if (state.value.hasCheckedGame) return;
      const { selectedId, randomId } = state.value;
      if (!selectedId || !randomId) return;

      if (
        (Number(selectedId) === 1 && randomId === 3) ||
        (Number(selectedId) === 3 && randomId === 2) ||
        (Number(selectedId) === 2 && randomId === 1)
      ) {
        state.value.scores += 1;
        state.value.gameResult = "win";
      } else if (
        (Number(selectedId) === 2 && randomId === 3) ||
        (Number(selectedId) === 1 && randomId === 2) ||
        (Number(selectedId) === 3 && randomId === 1)
      ) {
        state.value.gameResult = "lose";
      } else {
        state.value.gameResult = "draw";
      }
      state.value.hasCheckedGame = true;
    },
    resetGame: (state) => {
      state.value.selectedId = null;
      state.value.randomId = Math.floor(Math.random() * 3) + 1;
      state.value.hasCheckedGame = false;
    },
  },
});

export const { render, randomRender, checkGame, resetGame } =
  renderElementSlice.actions;
export default renderElementSlice.reducer;

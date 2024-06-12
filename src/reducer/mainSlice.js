import { createSlice } from "@reduxjs/toolkit";
import { data } from "../constant";
const initialState = {
  login: false,
  drawerOpen: false,
  addNewSicknessOpen: false,
  patients: data,
  doctors: [
    {
      id: 1,
      name: "علی رضا عظیمی",
    },
    {
      id: 2,
      name: "علی مظاهری",
    },
    {
      id: 3,
      name: "سینا بختیاری",
    },
  ],
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeDrawerState(state, action) {
      state.drawerOpen = action.payload;
    },
    changeLoginState(state, action) {
      state.login = action.payload;
    },
    addNewSicknessOpenOpened(state, action) {
      state.addNewSicknessOpen = action.payload;
    },
    addNewSicknessOpenClosed(state, action) {
      state.addNewSicknessOpen = action.payload;
    },
    addNewSickness(state, action) {
      state.patients.push(action.payload) ;
    },
  },
});
export const {
  changeDrawerState,
  changeLoginState,
  addNewSicknessOpenOpened,
  addNewSicknessOpenClosed,
  addNewSickness
} = mainSlice.actions;
export default mainSlice.reducer;

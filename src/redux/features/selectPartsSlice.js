import { createSlice } from "@reduxjs/toolkit";

export const selectPartsSlice = createSlice({
  name: "selectParts",
  initialState: {
    cpu: {},
    motherboard: {},
    ram: {},
    powersupply: {},
    storage: {},
    monitor: {},
  },
  reducers: {
    selectCpu: (state, action) => {
      state.cpu = action.payload;
    },
    selectMotherboard: (state, action) => {
      state.motherboard = action.payload;
    },
    selectRam: (state, action) => {
      state.ram = action.payload;
    },
    selectPowerSupply: (state, action) => {
      state.powersupply = action.payload;
    },
    selectStorage: (state, action) => {
      state.storage = action.payload;
    },
    selectMonitor: (state, action) => {
      state.monitor = action.payload;
    },
    selectOthers: (state, action) => {
      state.others = action.payload;
    },
  },
});

export const {
  selectCpu,
  selectMotherboard,
  selectRam,
  selectPowerSupply,
  selectStorage,
  selectMonitor,
  selectOthers,
} = selectPartsSlice.actions;

export default selectPartsSlice.reducer;

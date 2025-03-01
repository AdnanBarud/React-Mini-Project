import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const PasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    // for adding paste to local storage and displaying toast
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfuly");
    },
    // for update paste to local storage and displaying toast
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste updated");
      }
    },
    // for restall paste to local storage and displaying toast
    resetAllPastes: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("pastes");
    },
    // for remove all paste to local storage and displaying toast
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index>=0){
        state.pastes.splice(index, 1)

        localStorage.setItem('pastes', JSON.stringify(state.pastes))

        toast.success("paste deleted")
      }
    },
  },
});

export const { addToPaste, updateToPaste, reset } = PasteSlice.actions;

export default PasteSlice.reducer;

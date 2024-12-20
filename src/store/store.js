import { configureStore } from "@reduxjs/toolkit";
import diagramSlice from "../slices/diagramSlice";

export default configureStore({
  reducer: {
    diagram: diagramSlice,
  },
});

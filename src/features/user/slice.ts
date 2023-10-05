import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sampleAPICall } from "./thunkActions";
import { IUser } from "../../types/user";

interface InitialState {
  user: IUser;
  loading: boolean;
}

const initialState: InitialState = {
  user: {
    completed: false,
    id: "",
    title: "",
    userId: "",
  },
  loading: false,
};

export const userSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sampleAPICall.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        sampleAPICall.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(sampleAPICall.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
export * from "./thunkActions";

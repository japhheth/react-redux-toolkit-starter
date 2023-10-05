import { createAsyncThunk } from "@reduxjs/toolkit";

interface IApiRequest {
  user: number;
}

export const sampleAPICall = createAsyncThunk(
  "sample/api-call",
  async ({ user }: IApiRequest, { rejectWithValue }) => {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${user}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        console.error(err);
        rejectWithValue(err);
      });
  }
);

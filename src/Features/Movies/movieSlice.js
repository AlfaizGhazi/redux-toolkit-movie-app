import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Common/API/movieApi";
import { API_KEY } from "../../Common/API/movieApiKey";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMovieOrShow",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    // fetchAsyncMovies Promise:
    [fetchAsyncMovies.pending]: () => {
      console.log("Fetch Movies Pending...");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch Movies Fulfilled.");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetch Movies Rejected!");
    },

    // fetchAsyncShows Promise:
    [fetchAsyncShows.pending]: () => {
      console.log("Fetch Shows Pending...");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetch Shows Fulfilled.");
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Fetch Shows Rejected!");
    },

    // fetchAsyncMovieOrShow Promise:
    [fetchAsyncMovieOrShow.pending]: () => {
      console.log("Fetch Selected Movie or Show Pending...");
    },
    [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
      console.log("Fetch Selected Movie or Show Fulfilled.");
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovieOrShow.rejected]: () => {
      console.log("Fetch Selected Movie or Show Rejected!");
    },
  },
});

export const { removeMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;

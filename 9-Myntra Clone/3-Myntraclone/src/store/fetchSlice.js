import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
    name: 'fetchStauts',
    initialState: {
        fetchDone: false,
        currentlyfetching: false,
    },
    reduders: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetcStarted: (state) => {
            return state.currentlyfetching = true;
        },
        markFetchfinsed: (state) => {
            return state.currentlyfetching = false;
        }
    }
});

export const fetchStatusSliceActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageno: [1,2,3,4],
    selectPage: 1
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers:{
        pageSelected: (state,action) => {
            state.selectPage = action.payload
        }
    }
})

export const {pageSelected} = paginationSlice.actions;
export default paginationSlice.reducer;
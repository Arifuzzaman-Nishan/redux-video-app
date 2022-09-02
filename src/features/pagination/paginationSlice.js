import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageno: [],
    selectPage: 1,
    perPageVideos: 3
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers:{
        pageSelected: (state,action) => {
            state.selectPage = action.payload
        },
        setPageno: (state,action) => {
            const totalPage = Math.round(action.payload/state.perPageVideos);
            state.pageno = Array.from({length: totalPage}, (_, i) => i + 1);
        },
        resetPagination: (state,action) => {
            state.selectPage = 1;
        }
    }
})

export const {pageSelected,setPageno,resetPagination} = paginationSlice.actions;
export default paginationSlice.reducer;
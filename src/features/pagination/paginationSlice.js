import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageno: [],
    selectPage: 1
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers:{
        pageSelected: (state,action) => {
            state.selectPage = action.payload
        },
        setPageno: (state,action) => {
            const perPageVideos = 2;
            const totalPage = Math.round(action.payload/perPageVideos);
            state.pageno = Array.from({length: totalPage}, (_, i) => i + 1);
        }
    }
})

export const {pageSelected,setPageno} = paginationSlice.actions;
export default paginationSlice.reducer;
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    input: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        setInput: (state,action) => {
            state.input = action.payload;
        },
        reset: (state,action) => {
            state.search = "";
            state.tags = [];
            state.input = "";
        }
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,reset,setInput } = filterSlice.actions;

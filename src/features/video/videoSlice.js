import { getVideo, videoLikeUnlike } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

export const setLikesUnlikes = createAsyncThunk(
    "video/setLikesUnlikes",
    async({type,value,videoId}) => {
         const likeUnlike = await videoLikeUnlike(type,value,videoId);
         return likeUnlike;
    }
)

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            })

        builder
            .addCase(setLikesUnlikes.fulfilled,(state,action) => {
                state.video = action.payload;
            })
        
    },
});

export default videoSlice.reducer;

import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

export const videoLikeUnlike = async(type,value,videoId) => {
    if(type === "like"){
        const res = await axios({
             method:'patch',
             url: `/videos/${videoId}`,
             data: {
                 likes: value+1
             }
         })
         return res.data;
         
      }else{
         const res =  await axios({
             method:'patch',
             url: `/videos/${videoId}`,
             data: {
                 unlikes: value+1
             }
         })
         return res.data;
      }
}

import axios from "../../utils/axios";

export const getVideos = async (tags, search,pageNumber=1) => {
    const perPageShowVideo = 2;
    
    let end = perPageShowVideo*parseInt(pageNumber);
    let start = end - perPageShowVideo;

    let queryString = `_start=${start}&_end=${end}&`;

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};

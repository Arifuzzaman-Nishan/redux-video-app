import axios from "../../utils/axios";

export const getVideos = async (tags, search,pageNumber,authorName="",perPageShowVideo) => {
    
    // let end = perPageShowVideo*parseInt(pageNumber);
    // let start = end - perPageShowVideo;

    let queryString = `_page=${pageNumber}&_limit=${perPageShowVideo}&`;

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if(authorName !== ""){
        queryString = `author=${authorName}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return {videos: response.data,totalVideos: response.headers['x-total-count']};
};

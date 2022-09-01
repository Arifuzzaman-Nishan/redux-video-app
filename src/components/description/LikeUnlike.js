import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { setLikesUnlikes } from "../../features/video/videoSlice";

export default function LikeUnlike({video}) {
    const dispatch = useDispatch();
    const {id,likes,unlikes} = video;

    const handleLikesUnlikes = (type,value,videoId) => {
        dispatch(setLikesUnlikes({type,value,videoId}))
    }
    
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img onClick={() => handleLikesUnlikes("like",likes,id)} className="w-5 block cursor-pointer" src={likeImage} alt="Like" />
                </div>
                <div  className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img onClick={() => handleLikesUnlikes("unlike",unlikes,id)} className="w-5 block cursor-pointer" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}

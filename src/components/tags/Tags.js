import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleReset = () => dispatch(reset());
    
    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto items-center">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
                <div className="ml-[20rem]">
                    <button onClick={handleReset} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-6 rounded-full">Reset</button>
                </div>
            </div>
        </section>
    ) : null;
}

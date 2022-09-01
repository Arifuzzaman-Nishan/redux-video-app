import { useDispatch, useSelector } from "react-redux";
import { pageSelected } from "../../features/pagination/paginationSlice";

export default function Pagination() {
    const {pageno,selectPage} = useSelector(state => state.pagination);
    const dispatch = useDispatch();

    const handlePagination = (pageNumber) => {
        dispatch(pageSelected(pageNumber));
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end cursor-pointer">
                {pageno.map(page => (
                    <div key={page} onClick={() => handlePagination(page)} className={`px-4 py-1 rounded-full ${page === selectPage? "bg-blue-600 text-white":"bg-blue-100"}`}>
                        {page}
                    </div>
                ))}
            </div>
        </section>
    );
}
// bg-blue-100 text-blue-600 px-4 py-1 rounded-full
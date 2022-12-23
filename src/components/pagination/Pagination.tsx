import ReactPaginate from "react-paginate"

const Pagination = () => {
  return (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={1}
      onPageChange={(page) => console.log("xxx")}
      pageCount={10}
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextLinkClassName="page-link"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      previousLinkClassName="page-link"
      pageLinkClassName="page-link"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end px-2 mt-1"
    />
  )
}
export default Pagination;
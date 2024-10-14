function Pagination(props) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={props.prev}
    onClick = {props.dec}
     > Prev
    </button>
  );
  const currentPage = <button data-testid="current-page" onClick={props.cur}>{props.page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={props.next}
      onClick = {props.inc}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages" >{props.total}</b>
      </div>
    </div>
  );
}

export default Pagination;

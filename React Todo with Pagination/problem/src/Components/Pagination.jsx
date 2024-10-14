function Pagination(props) {
  return (
    <div data-testid="pagination">
      {/* add PREVIOUS button and div with current page number and NEXT button */}
      <button onClick={props.prev} disabled={props.dp}>PREVIOUS</button>
      <div>{props.page}</div>
      <button onClick={props.next} disabled={props.dn}>NEXT</button>
    </div>
  );
}

export default Pagination;

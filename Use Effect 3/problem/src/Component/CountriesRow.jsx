function CountriesCard(props) {
  return (
    <tr data-testid="country-card">
      <td>{props.id}</td>
      <td data-testid="country-card-name">{props.country}</td>
      <td data-testid="country-card-population">{props.population}</td>
      <td>{props.rank}</td>
    </tr>
  );
}

export default CountriesCard;

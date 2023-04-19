export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.name} className="card--img" />
      <div className="card--details">
        <div className="card--location">
          <h3 className="card--location--country">
            🗺️{props.country.toUpperCase()}
          </h3>
          <a className="card--location--url" href={props.location}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card--name">{props.name}</h2>
        <h3 className="card--date">
          {props.dateFrom} - {props.dateTo}
        </h3>
        <p className="card--description">{props.placeDescr}</p>
      </div>
    </div>
  );
}

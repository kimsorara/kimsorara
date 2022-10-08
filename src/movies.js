import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, image, title, summary, genres }) {
  return (
    <div>
      <img src={image} alt={title} />
      <Link to={`/movie${id}`}>
        <h2> {title}</h2>
      </Link>
      <p>{summary.length > 235 ? `${summary.slice(0, 236)}....` : summary}</p>
      <ul>
        {genres.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

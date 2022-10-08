import { useState, useEffect } from "react";
import Movie from "./movies";
import "./App.css";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(response.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  /*
    useEffect(() => {
    
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
        .then((response) => response.json())
        .then((json) => setMovies(json.data.movies), setLoading(false));
    }, []);
  */

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="box">
          {movies.map((el) => (
            <Movie
              id={el.id}
              key={el.id}
              image={el.medium_cover_image}
              title={el.title}
              summary={el.summary}
              genres={el.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;

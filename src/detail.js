import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  console.log({ id });
  const [buffer, setBuffer] = useState(true);
  const [imformation, setInformation] = useState([]);
  const listMovies = async () => {
    const imfor = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInformation(imfor.data.movie);
    setBuffer(false);
    console.log(imfor);
  };
  useEffect(() => {
    listMovies();
  }, []);
  return (
    <div>
      {buffer ? (
        <h1>Detail</h1>
      ) : (
        <div>
          <img src={imformation.background_image} />
          <h1>{imformation.title_long}</h1>
          <h2>
            <ul>
              <li>평점:{imformation.rating}</li>
              <li>설명:{imformation.description_full}</li>
            </ul>
          </h2>
        </div>
      )}
    </div>
  );
}
export default Detail;

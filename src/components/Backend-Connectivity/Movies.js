import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Displayer from "./Displayer";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  async function moviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/film/");
      if (!response.ok) {
        if (!retrying) {
          setInterval(() => {
            fetch("https://swapi.py4e.com/api/film/").then((response) => {
              console.log("response fetched");
            });
          }, 5000);
        }
        throw new Error("some error occured");
      }
      const data = await response.json();

      console.log(data.results);
      const newMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
        };
      });
      setMovies(newMovies);
      console.log(newMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  const retryHandler = () => {
    setRetrying(true);
  };
  return (
    <>
      <Button onClick={moviesHandler}>Fetch Movies</Button>
      <Card className="bg-light" style={{ height: "400px", color: "red" }}>
        {!isLoading && <Displayer movies={movies} />}
        {isLoading && (
          <p style={{ color: "red" }}>Loading.... it is thek dfoef</p>
        )}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movies to Display</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        <Button onClick={retryHandler}>Cancel</Button>
      </Card>
    </>
  );
};

export default Movies;

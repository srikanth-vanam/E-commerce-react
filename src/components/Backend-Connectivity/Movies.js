import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Displayer from "./Displayer";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  async function moviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.py4e.com/api/films/");
    const data=await response.json();

    console.log(data.results);
    const newMovies = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
      };
    });
    setMovies(newMovies);
    setIsLoading(false);
    console.log(newMovies);
  }
  return (
    <>
      <Button onClick={moviesHandler}>Fetch Movies</Button>
      <Card className="bg-light" style={{ height: "400px",color:'red' }}>
        { !isLoading && <Displayer movies={movies} />}
        {isLoading && <p style={{color:'red'}}>Loading.... it is thek dfoef</p>}
        {!isLoading && movies.length === 0 && <p>No movies to Display</p>}
      </Card>
    </>
  );
};

export default Movies;

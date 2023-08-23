import { useCallback, useEffect, useState } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import Displayer from "./Displayer";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // using callbaack hook to memoize the function .
  const moviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      if (!response.ok) {
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
  }, []);
  // we want to get data whenever this movieHandler changes so that'why it is included in [].
  useEffect(() => {
    moviesHandler();
  }, [moviesHandler]);
  const [inputText, setInputText] = useState("");
  const [inputTitle,setInputTitle]=useState("");
  const [inputDate,setInputDate]=useState("");
  const textChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const titleChangeHandler=(e)=>{
    setInputTitle(e.target.value);
  }
  const dateChangeHandler=(e)=>{
    setInputDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    const movieFormData = {
      title: inputTitle,
      text: inputText,
      date: inputDate,
    };
    console.log(movieFormData);
  };
  return (
    <>
      <Form
        className="m-auto mb-1"
        style={{ width: "40rem", height: "20rem" }}
      >
        <FormLabel>Title</FormLabel>
        <FormControl id="title" value={inputTitle} onChange={titleChangeHandler}></FormControl>
        <FormLabel>Text</FormLabel>
        <FormControl
          id="text"
          onChange={textChangeHandler}
          className="h-25"
          value={inputText}
        ></FormControl>
        <FormLabel>Date</FormLabel>
        <FormControl id="date" value={inputDate} onChange={dateChangeHandler}></FormControl>
        <Button onClick={submitHandler} className="mt-3">Add movie</Button>
      </Form>
      <Button className="d-block m-auto" onClick={moviesHandler}>
        Fetch Movies
      </Button>
      <Card
        className="bg-light "
        style={{ color: "red", width: "40rem", margin: "1rem auto" }}
      >
        {!isLoading && <Displayer movies={movies} />}
        {isLoading && (
          <p style={{ color: "red" }}>Loading.... it is thek dfoef</p>
        )}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movies to Display</p>
        )}
        {!isLoading && error && <p>{error}</p>}
      </Card>
    </>
  );
};

export default Movies;

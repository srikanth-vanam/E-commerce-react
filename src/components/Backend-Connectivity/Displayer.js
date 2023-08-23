import { Button } from "react-bootstrap";

const Displayer = (props) => {
  return (
    <>
      <ul className="list-unstyled p-3">
        {props.movies.map((item) => (
          <li className="text-dark text-center m-3" key={item.id}>
            <p>
              {item.id}, {item.title}
            </p>
            <p>{item.text}</p>
            <Button  onClick={()=>props.onDelete(item.id)}>Delete Movie</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Displayer;

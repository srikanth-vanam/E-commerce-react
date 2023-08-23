const Displayer = (props) => {
  return (
    <>
      <ul className="list-unstyled p-2">
        {props.movies.map((item) => (
          <li className="text-dark text-center" key={item.id}>
            <p>
              {item.id}, {item.title}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Displayer;

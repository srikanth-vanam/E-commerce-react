const Displayer = (props) => {
  return (
    <>
      {props.movies.map((item) => (
        <>
          <li style={{color:'black'}}>
            <p>{item.id}, {item.title}</p>
          </li>
        </>
      ))}
    </>
  );
};

export default Displayer;

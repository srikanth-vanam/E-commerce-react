import { Button, Container } from "react-bootstrap";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header onHide={true} />
      <Hero />
      <Container
        fluid
        className="bg-secondary d-flex align-items-center flex-column"
        style={{ height: "200px" }}
      >
        <div className=" d-block w-25" role="button">
          <h2 className="p-2 text-white border border-primary">
            Get our Latest Album
          </h2>
        </div>
        <div className="d-block mt-3" role="button">
          <p
            className="text-white fs-5"
            style={{
              border: "2px solid lightblue",
              borderRadius: "50px",
              padding: "1.5rem 1.5rem",
            }}
          >
            play
          </p>
        </div>
      </Container>
      <div className=" bg-tertiary m-auto mt-5" style={{ width: "60rem" }}>
        <h3 className="text-center">TOURS</h3>
        <table className="w-75 m-auto">
          <tr className="border-bottom border-dark w-25">
            <td>JUL16</td>
            <td>DETROIT,</td>
            <td>MI DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
          <tr className="border-bottom border-dark">
            <td>JUL19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
          <tr className="border-bottom border-dark">
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
          <tr className="border-bottom border-dark">
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
          <tr className="border-bottom border-dark">
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
          <tr className="border-bottom border-dark">
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button className="m-1">Buy tickets</Button>
            </td>
          </tr>
        </table>
        <p> </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;

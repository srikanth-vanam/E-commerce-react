import { Container } from "react-bootstrap";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";

const AboutUs = () => {
  return (
    <>
      <Header onHide={true}/>
      <Hero />
      <Container className="w-50">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          officia! Reprehenderit nam consectetur facilis aut deleniti. Sint
          ipsam, laudantium dolores eius nesciunt error recusandae. A laudantium
          quas illum nemo excepturi. Nostrum nulla eveniet vitae architecto
          aspernatur sequi error quisquam adipisci deleniti illo, harum maxime
          fuga facilis ad corrupti voluptates, ex nemo distinctio sunt alias
          explicabo illum aperiam laudantium. Laboriosam, hic! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Perspiciatis dicta tenetur
          sequi in nobis? Voluptate, explicabo corrupti, veritatis rerum
          laboriosam temporibus autem, molestiae tenetur delectus alias magni at
          consequatur est! Officiis neque quam rem sint itaque corporis
          voluptatibus vel libero saepe perferendis eius veritatis, illum
          quibusdam non ad, deserunt unde ipsum corrupti vitae maxime. Magnam,
          excepturi. Odio similique reprehenderit nulla. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Debitis fugit beatae ullam
          sapiente at tenetur harum dolorem, id consectetur? Nemo delectus
          cumque inventore saepe itaque adipisci nulla, enim earum expedita.
          Quaerat, sed ut. Ad, possimus! Itaque, neque necessitatibus velit quos
          molestiae, dicta vel totam fugit culpa laboriosam, sequi ipsa pariatur
          impedit. Dolor, eaque. Praesentium modi enim velit officia nobis quis?
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;

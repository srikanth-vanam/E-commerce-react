import { Container } from "react-bootstrap";

const Hero = () => {
    return ( 
        <>
        <div className="border border-top"></div>
        <Container  fluid className="bg-secondary text-white" style={{height:'150px'}}>
            <h1 className="text-center" style={{fontSize:'80px'}}>The Generics</h1>
        </Container>
        </>
     );
}
 
export default Hero;
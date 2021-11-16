import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#" className="text-white mx-2 fs-1 fw-bold">Spacious</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                <img style={{'width': '100px', 'height': '100px'}} src="instacart_logo_small.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className='p-4'>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav
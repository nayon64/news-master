import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'

const Header = () => {
	const { user } = useContext(AuthContext)
	
	console.log(user)
	return (
		<Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand><Link to="/">News Master</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">
						Another action
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
						Separated link
					</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							{user ? <Image roundedCircle style={{ width:"30px"}} src={user.photoURL}></Image>:"No Photo"}
					</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaWhatsapp ,FaFacebook,FaTwitch,FaTwitter} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carosul from '../Carosul/Carosul';
import { AuthContext } from '../../contex/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightNav = () => {
	const { providerSignIn } = useContext(AuthContext)
	const googleProvider=new GoogleAuthProvider()
	const handleGoogleSingIn = () => {
		providerSignIn(googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user)
			})
		.catch(error=>console.error("error : ",error))
	}
	return (
		<div className='d-flex justify-content-start flex-column'>
			<ButtonGroup vertical>
				<Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login with Google</Button>
				<Button variant="outline-dark "> <FaGithub/> Login with Github</Button>
			</ButtonGroup>
			<div className='mt-4'>
				<h4 className='text-start'>Find us on</h4>
				<ListGroup className='text-start'>
					<ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
					<ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
					<ListGroup.Item> <FaWhatsapp></FaWhatsapp> Whatspp</ListGroup.Item>
					<ListGroup.Item> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
			</div>
			<Carosul></Carosul>

		</div>
	);
};

export default RightNav;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
	const {title,_id,details,author,total_view,image_url}=news
	return (
		<Card className='mb-4'>
			<Card.Header className='d-flex align-items-center justify-content-between'>
				<div className='d-flex align-items-center'> 
					<Image roundedCircle src={author.img} style={{ height: '60px' }}></Image>
					<div className='ms-3'>
						<h6 className='mb-0'>{author.name}</h6>
						<p className='mb-0 mt-1'>{author.published_date}</p>
					</div>
				</div>
				<div>
					<FaRegBookmark></FaRegBookmark>
					<FaShareAlt></FaShareAlt>
				</div>
			</Card.Header>
			
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Img className='mt-3' variant='top' src={image_url} />
				<Card.Text className='mt-4'> 
				{details.length>250? <><span>{details.slice(0,250)+ "..." }</span> <Link to={`/news/${_id}`}>Read More</Link></>: details}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
		</Card>
	);
};

export default NewsCart;
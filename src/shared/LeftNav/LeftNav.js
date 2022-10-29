import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
	const [catagorys, setCatagorys] = useState([])
	
	useEffect(() => {
		fetch("http://localhost:5000/news-catagories")
			.then(res => res.json())
			.then(data => setCatagorys(data))
		
	},[])

	return (
		<div>
			<h4>This is catagories: </h4>
			<div className='text-start'>
				{catagorys.map(catagory => <p key={catagory.id}>
					<Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
				</p>)}
			</div>
		</div>
	);
};

export default LeftNav;
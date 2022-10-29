
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../shared/NewsCart/NewsCart';


const Catagories = () => {
	const allNews = useLoaderData()
	console.log(allNews)
	return (
		<div>
			{
				allNews.map(news => <NewsCart
					key={news._id}
					news={news}
				></NewsCart>)
			}
		</div>
	);
};

export default Catagories;
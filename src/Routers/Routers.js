import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagories from "../pages/Catagories/Catagories";
import Home from "../pages/Home/Home";
import News from "../shared/News/News";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader:()=>fetch(`http://localhost:5000/news`)
			},
			{
				path: "/home",
				element: <Home></Home>,
				loader:()=>fetch(`http://localhost:5000/news`)
			},
			
			{
				path: "/catagory/:id",
				element: <Catagories></Catagories>,
				loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
			},
			{
				path: "/news/:id",
				element:<News></News>
			}
		]
	}
])
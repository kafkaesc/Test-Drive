import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './Error';
import ButtonStartContinuous from './pages/ButtonStartContinuous';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Controlled from './pages/Controlled';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/button-start-continuous', element: <ButtonStartContinuous /> },
			{ path: '/controlled', element: <Controlled /> },
			{ path: '/', element: <Home /> },
			{ path: '/home', element: <Home /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

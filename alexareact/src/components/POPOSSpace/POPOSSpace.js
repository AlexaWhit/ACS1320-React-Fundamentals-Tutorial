import React from "react";
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

// Props is always an object!
// Props are used to configure your components
function POPOSSpace(props) {
	const { name, image, address, hours, id } = props;
	return (
		<article className="POPOSSpace">
			<h1>
				<Link 
					className="POPOSSpace-title"
					to={`/details/${id}`}>
					{name}
				</Link>
			</h1>
			<Link to={`/details/${id}`}>
				<img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
			</Link>
			<section className="POPOSSpace-info">
				<address>{address}</address>
				<time className="hours">{hours}</time>
			</section>
		</article>
	)
}

export default POPOSSpace
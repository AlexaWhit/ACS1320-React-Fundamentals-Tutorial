import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json';

function POPOSList() {
	const spaces = data.map(( { title, address, images, hours }, i) => {
		return (
			<div className="POPOSList">
			<POPOSSpace
				id={i}
				key={title}
				name={title}
				address={address}
				image={images[0]}
				hours={hours}
			/>
			</div>
		)
	})

	return (
		<div className="POPOSList">
			{ spaces }
		</div>
	)
}

export default POPOSList;
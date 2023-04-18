import React from 'react';
import { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {
	const [query, setQuery] = useState('')
	const spaces = data.filter((obj) => {
		const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
		const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
		return inTitle || inAddress
	}).map((obj) => {
		const { id, title, address, images, hours } = obj
		// const spaces = data.map(({ title, address, images, hours }, i) => {
		return (
			<section className="POPOSList">
				<POPOSSpace
					id={id}
					key={`${title}-${id}`}
					name={title}
					address={address}
					image={images[0]}
					hours={hours}
				/>
			</section>
		)
	})

	return (
		<section className="POPOSList">
		  <header>
			<form role="search" aria-labelledby="search-form-label">
			  <label htmlFor="search-input" id="search-form-label">
				Search by Title or Address:
			  </label>
			  <input
				type="text"
				id="search-input"
				aria-describedby="search-by-title-or-address"
				value={query}
				placeholder="search"
				onChange={(e) => setQuery(e.target.value)}
			  />
			  <span id="search-by-title-or-address" className="visually-hidden">
				Enter the title or address to search for a POPOS location.
			  </span>
			  <button type="submit" aria-label="submit-search">
				Submit
			  </button>
			</form>
		  </header>
		  {spaces}
		</section>
	  );
}

export default POPOSList;
import React from 'react'
import POPOSFeature from '../POPOSFeature/POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
  return (
    <article className="POPOSFeatureList" aria-labelledby="features-title">
      <h2 id="features-title" className="visually-hidden">POPOS Features</h2>
      {icons}
    </article>
  )
}

export default POPOSFeatureList;
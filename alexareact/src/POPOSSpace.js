import './POPOSSpace.css';
// Props is always an object!
// Props are used to configure your components
function POPOSSpace(props) {
	const { name, image, address, hours } = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  )
}

export default POPOSSpace
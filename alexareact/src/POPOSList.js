import POPOSSpace from "./POPOSSpace"
import './POPOSList.css'

function POPOSList() {
    return (
        <div className="POPOSList">
            <POPOSSpace
                name="50 California Street"
                address="50 California St."
                image="50-california-st.jpg" 
            />
            <POPOSSpace
                name="100 Pine Street"
                address="100 Pine St."
                image="100-pine.jpg" 
            />
            <POPOSSpace
                name="101 California Street"
                address="101 California St."
                image="101-california.jpg" 
            />
            <POPOSSpace
                name="Transamerica Redwood Park"
                address="600 Montgomery St."
                image="transamerica-redwood-park.jpg" 
            />
            <POPOSSpace
                name="343 Sansome Roof Garden"
                address="343 Sansome St. Floor 15"
                image="343-sansome-roof-garden.jpg" 
            />
            <POPOSSpace
                name="525 Market Street Plaza"
                address="525 Market St."
                image="525-market-street-plaza.jpg" 
            />
        </div>
    )
}

export default POPOSList
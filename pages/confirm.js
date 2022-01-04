import React,{useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {
    const [pickUpCoordinates, setPickUpCoordinates] = useState()
    const [dropOffCoordinates, setDropOffCoordinates] = useState()

    const getPickUpCoordinates = () => {
        const pickup = 'Lagos'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiZGF2aWQtdWsiLCJhIjoiY2thcGVzOTM0MDFraTJycHd3bjhmejVmNCJ9.h7mivfQ0c4j6OTIZbdc8GA'
        }))
        .then(response => response.json())
        .then(data => setPickUpCoordinates(data.features[0].center))
    }

    const getDropOffCoordinates = () => {
        const dropoff = 'Onitsha'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiZGF2aWQtdWsiLCJhIjoiY2thcGVzOTM0MDFraTJycHd3bjhmejVmNCJ9.h7mivfQ0c4j6OTIZbdc8GA'
        }))
        .then(response => response.json())
        .then(data => {
            console.log('Drop off' + '\n' + data.features[0].center);
            setDropOffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickUpCoordinates()
        getDropOffCoordinates()
    },[])

    return (
        <Wrapper>
            <Map pickUpCoordinates={pickUpCoordinates} dropOffCoordinates={dropOffCoordinates} />
            <RideContainer>
                Ride Selector
                Confirm Location
               {/* <p>{pickUpCoordinates}</p> 
                <p>{dropOffCoordinates}</p> */}
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 
`
import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWQtdWsiLCJhIjoiY2thcGVzOTM0MDFraTJycHd3bjhmejVmNCJ9.h7mivfQ0c4j6OTIZbdc8GA';;

const Map = () => {
        useEffect(() => {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [9.0820, 8.6753],
                zoom: 3
            });
        })
    return <Wrapper id='map' />
}

export default Map

const Wrapper = tw.div`
  flex-1
`
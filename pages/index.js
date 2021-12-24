import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWQtdWsiLCJhIjoiY2thcGVzOTM0MDFraTJycHd3bjhmejVmNCJ9.h7mivfQ0c4j6OTIZbdc8GA';;

export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-99.29811, 39.39172],
    zoom: 3
    });
    });

  // const map = new mapboxgl.Map({
  //   container:'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   // center: ,
  //   // zoom:,
    
  // })
  return (
    <Wrapper>
     <Map id='map'>Map</Map>
     <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-red-300
`

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`
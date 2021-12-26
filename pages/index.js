import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map';

export default function Home() {

  return (
    <Wrapper>
     <Map />
     <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-red-300
`
const ActionItems = tw.div`
  flex-1
`
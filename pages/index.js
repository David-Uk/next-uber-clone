import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map';

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/*Header  */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20215114.jpg" />
          <Profile>
            <Name>Paul Wilbur</Name>
            <UserImage src='https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW4lMjBtYW58ZW58MHx8MHx8&w=1000&q=80'/>
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          
          <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
            Ride</ActionButton>
          <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels</ActionButton> 
          <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve</ActionButton> 
        </ActionButtons>
        <InputButton>Where to?</InputButton> 
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20
`

const UserImage = tw.img`
  h-12 w-12 rounded-full borderborder-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`
const ActionButtonImage = tw.img`
  h-3/5
`
const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
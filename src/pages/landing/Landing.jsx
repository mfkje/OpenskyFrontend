import NavbarLandingPage from '../../components/navbar/NavbarLandingPage'
import FooterLandingPage from '../../components/footer/FooterLandingPage'
import Login from '../../components/login/Login'

import {useEffect} from 'react'

const Landing = () => {

  useEffect(()=> {
    document.title = "OpenSky | NFT'S that you Like"
  }, [])
  return(
    <>
      <NavbarLandingPage/>
      <Login/>
      <FooterLandingPage/>
    </>
  )
}

export default Landing;
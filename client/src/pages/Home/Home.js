import React, { useState, useEffect, Component } from 'react'
import './Home.css'
import sunVector from '../../images/sun-vector.svg'
import SynergizeLogo from '../../images/Synergize-Logo-10.png'

function Home() {
  // const [offsetY, setOffSetY] = useState(0)
  // const handleScroll = () => setOffSetY(window.scrollY)
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])
  // let visibility = 'visible'
  // if (offsetY > window.height) {
  //   visibility = 'hidden'
  // }
  return (
    <div id={'home'} style={{ height: '100vh', width: '92vw', position: 'relative', float: 'right'}}>
      {/* <div style={{ marginTop: '-8vh', transform: `translateY(${offsetY * 1.2}px)`, display: 'flex', justifyContent: 'center', width: '92vw', position: 'relative', float: 'right', overflow: 'hidden'}}>
        <img src={sunVector} style={{ width: '30vw' }} alt={'sun'}></img>
      </div> */}
      <div style={{ marginTop: '25vh', display: 'flex', justifyContent: 'center', width: '92vw', position: 'relative', float: 'right', zIndex: '2'}}>
      <img src={SynergizeLogo} style={{ width: '50vw' }}></img>
      </div>
    </div>
  )
}

export default Home
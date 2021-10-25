import React, {useEffect, useState} from 'react'
import sunVector from '../../images/sun-vector.svg'
import sunVector2 from '../../images/sun-vector2.svg'
import sunVector3 from '../../images/sun-vector3.svg'
import sunVector4 from '../../images/sun-vector4.svg'
import mountain from '../../images/mountain/mountain-svg.svg'
import mountain2 from '../../images/mountain/mountain2.svg'
import mountain3 from '../../images/mountain/mountain3.svg'
import mountain4 from '../../images/mountain/mountain4-svg.svg'
import mountain5 from '../../images/mountain/mountain5.svg'
import mountain6 from '../../images/mountain/mountain6.svg'
import mountain7 from '../../images/mountain/mountain7.svg'
import mountain8 from '../../images/mountain/mountain8.svg'
import mountain_water_red from '../../images/mountain/mountain_water_red.svg'
import mountain_water_blue from '../../images/mountain/mountain_water_blue.svg'
import cloud1 from '../../images/clouds/cloud1.svg'
import cloud2 from '../../images/clouds/cloud2.svg'
import cloud3 from '../../images/clouds/cloud3.svg'

const Parralax = () => {
  const [offsetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.scrollY)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  let offset1 = 0
  let opacity1 = 1
  let opacity2 = 1
  let opacity3 = 1
  let opacity4 = 1
  let offset2 = -1000
  let offset3 = -1000
  let offset4 = -1000
  let opacity5 = ((offsetY - (3 * window.innerHeight)) / window.innerHeight)
  if ((offsetY >= (window.innerHeight)) && (offsetY <= (1.5 * window.innerHeight))) {
    offset1 = -200
    offset2 = (offsetY * 1.16)
    offset3 = (offsetY * 1.16)
    opacity3 = ((offsetY - window.innerHeight) / window.innerHeight)
  } else if ((offsetY >= (1.5 * window.innerHeight)) && (offsetY <= (2.25 * window.innerHeight))) {
    offset1 = -200
    offset2 = -200
    offset3 = (offsetY * 1.16)
    offset4 = (offsetY * 1.16)
    opacity4 = ((offsetY - (1.5 * window.innerHeight)) / window.innerHeight)
    
  } else if ((offsetY >= (2.25 * window.innerHeight)) && (offsetY <= (3.8 * window.innerHeight))) {
    offset1 = -200
    offset2 = -200
    offset3 = -200
    offset4 = (offsetY * 1.16)
    // mountainOffset = (offsetY * 0.8)
  }
  else if (offsetY <= window.innerHeight) {
    offset1 = (offsetY * 1.16)
    offset2 = (offsetY * 1.16)
    opacity2 = (offsetY / window.innerHeight)
    // opacity1 = (1 - (offsetY / window.innerHeight))
  }
  
  // if (offsetY > window.innerHeight) {
    
  //   offset2 = (offsetY * 1.2)
  // }
  return(
    <>
      <div style={{ transform: `translateY(${offset1}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity1}`, width: '100%', display: 'flex', justifyContent: 'center'}}>
      <img src={sunVector} style={{width: '50vw', minWidth: '500px'}} alt={'sun'}></img>
    </div>
      <div style={{ transform: `translateY(${offsetY * 0.5}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'flex-start', opacity: '75%' }}>
        <img src={cloud1} style={{ width: '45vw', minWidth: '500px', marginLeft: '-12vw' }} alt={'cloud'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.6}px)`, position: 'absolute', zIndex: '1', marginTop: '2vh', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <img src={cloud2} style={{ width: '12vw', minWidth: '300px', marginRight: '7vw', opacity: '90%' }} alt={'cloud'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.45}px)`, position: 'absolute', zIndex: '0', marginTop: '50vh', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'flex-end', opacity: '85%' }}>
        <img src={cloud3} style={{ width: '55vw', minWidth: '500px', marginRight: '-2vw' }} alt={'cloud'}></img>
      </div>
      <div style={{ transform: `translateY(${offset2}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity2}`, width: '100%', display: 'flex', justifyContent: 'center'}}>
      <img src={sunVector2} style={{width: '50vw', minWidth: '500px'}} alt={'sun'}></img>
    </div>
      <div style={{ transform: `translateY(${offset3}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity3}`, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={sunVector3} style={{ width: '50vw', minWidth: '500px' }} alt={'sun'}></img>
      </div>
      <div style={{ transform: `translateY(${offset4}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity4}`, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={sunVector4} style={{ width: '50vw', minWidth: '500px' }} alt={'sun'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.58}px)`, position: 'absolute', zIndex: '0', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '135vh' }}>
        <img src={mountain} style={{ width: '100%', minWidth: '1200px', height: '200%'}} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.6}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '135vh' }}>
        <img src={mountain2} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.6}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '154vh' }}>
        <img src={mountain3} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.64}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '155vh' }}>
        <img src={mountain4} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.65}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '155vh' }}>
        <img src={mountain5} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.68}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '150vh' }}>
        <img src={mountain6} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.685}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '149vh' }}>
        <img src={mountain7} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.69}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '149vh' }}>
        <img src={mountain8} style={{ width: '100%', minWidth: '1200px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.7}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '146.1vh' }}>
        <img src={mountain_water_red} style={{ width: '100%', minWidth: '1300px', height: '200%' }} alt={'mountain'}></img>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.7}px)`, position: 'absolute', zIndex: '1', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '146.1vh', opacity: `${opacity5}` }}>
        <img src={mountain_water_blue} style={{ width: '100%', minWidth: '1300px', height: '200%' }} alt={'mountain'}></img>
      </div>
    </>
  )
}

export default Parralax
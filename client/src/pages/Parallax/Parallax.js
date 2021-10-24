import React, {useEffect, useState} from 'react'
import sunVector from '../../images/sun-vector.svg'
import sunVector2 from '../../images/sun-vector2.svg'
import sunVector3 from '../../images/sun-vector3.svg'
import sunVector4 from '../../images/sun-vector4.svg'

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
  if ((offsetY >= (window.innerHeight)) && (offsetY <= (1.5 * window.innerHeight))) {
    offset1 = -200
    offset2 = (offsetY * 1.2)
    offset3 = (offsetY * 1.2)
    opacity3 = ((offsetY - window.innerHeight) / window.innerHeight)
  } else if ((offsetY >= (1.5 * window.innerHeight)) && (offsetY <= (2.25 * window.innerHeight))) {
    offset1 = -200
    offset2 = -200
    offset3 = (offsetY * 1.2)
    offset4 = (offsetY * 1.2)
    opacity4 = ((offsetY - (1.5 * window.innerHeight)) / window.innerHeight)
  } else if ((offsetY >= (2.25 * window.innerHeight)) && (offsetY <= (3.2 * window.innerHeight))) {
    offset1 = -200
    offset2 = -200
    offset3 = -200
    offset4 = (offsetY * 1.2)
  }
  else if (offsetY <= window.innerHeight) {
    offset1 = (offsetY * 1.2)
    offset2 = (offsetY * 1.2)
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
      <div style={{ transform: `translateY(${offset2}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity2}`, width: '100%', display: 'flex', justifyContent: 'center'}}>
      <img src={sunVector2} style={{width: '50vw', minWidth: '500px'}} alt={'sun'}></img>
    </div>
      <div style={{ transform: `translateY(${offset3}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity3}`, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={sunVector3} style={{ width: '50vw', minWidth: '500px' }} alt={'sun'}></img>
      </div>
      <div style={{ transform: `translateY(${offset4}px)`, position: 'absolute', zIndex: '1', marginTop: '-30vh', overflow: 'hidden', opacity: `${opacity4}`, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={sunVector4} style={{ width: '50vw', minWidth: '500px' }} alt={'sun'}></img>
      </div>
    </>
  )
}

export default Parralax
import React, {useEffect, useState} from 'react'
import sunVector from '../../images/sun-vector.svg'

const Parralax = () => {
  const [offsetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.scrollY)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return(
    <div style={{ transform: `translateY(${offsetY * 1.2}px)`, display: 'flex', justifyContent: 'center', width: '92vw', position: 'absolute', zIndex: '1', right: 0, marginTop: '-8vh', overflow: 'hidden'}}>
      <img src={sunVector} style={{width: '30vw'}} alt={'sun'}></img>
    </div>
  )
}

export default Parralax
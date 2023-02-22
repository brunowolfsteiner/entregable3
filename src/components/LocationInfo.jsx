import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <div className='location'>
    <article className='location__container'>
        <ul className='location__list'>
            <li className='location__li'><span className='location__title'>Name: </span> <br />{location?.name}</li>
            <li className='location__li'><span className='location__title'>Type: </span> <br />{location?.type}</li>
            <li className='location__li'><span className='location__title'>Dimension: </span> <br />{location?.dimension}</li>
            <li className='location__li'><span className='location__title'>Population: </span> <br />{location?.residents.length}</li>
        </ul>
    </article>
    </div>
  )
}

export default LocationInfo
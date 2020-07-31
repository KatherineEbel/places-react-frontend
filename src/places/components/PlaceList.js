import React from 'react'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
import './PlaceList.css'

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places yet!</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    )
  }
  // place has id, imageUrl, title, description, address, userId, location
  return (
    <ul className="place-list">
      {places.map(p => (
        <PlaceItem
          key={p.id}
          place={p}
          onDelete={() => console.log(`Deleting place: ${p.id}`)}
        />
      ))}
    </ul>
  )
}

export default PlaceList

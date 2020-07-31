import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageURL:
      'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    userId: 'u1',
  },
  {
    id: 'p2',
    title: 'Wrigley Field',
    description: 'Home of the Chicago Cubs',
    imageURL:
      'https://images.unsplash.com/photo-1519407451944-22e820099775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    address: 'West Addison Street Chicago, IL 60613',
    location: {
      lat: 41.94863,
      lng: -87.655365,
    },
    userId: 'u2',
  },
]
const UserPlaces = () => {
  const userId = useParams().userId
  const userPlaces = PLACES.filter(p => p.userId === userId)
  return <PlaceList places={userPlaces} />
}

export default UserPlaces

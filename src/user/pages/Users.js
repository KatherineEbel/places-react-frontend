import React from 'react'
import UsersList from '../components/UsersList'

const USERS = [
  {
    id: 'u1',
    name: 'Ben',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    placeCount: 5,
  },
  {
    id: 'u2',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    name: 'Courtney',
    placeCount: 2,
  },
  {
    id: 'u3',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    name: 'Brittney',
    placeCount: 6,
  },
  {
    id: 'u4',
    image:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    name: 'Max',
    placeCount: 2,
  },
]

const Users = () => <UsersList users={USERS} />

export default Users

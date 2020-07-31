import React from 'react'
import './UsersList.css'
import Card from '../../shared/components/UIElements/Card'
import UserItem from './UserItem'

const UsersList = props => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    )
  }

  return (
    <ul className="users-list">
      {props.users.map(u => (
        <UserItem key={u.id} user={u} />
      ))}
    </ul>
  )
}

export default UsersList

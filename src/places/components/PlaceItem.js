import React, { Fragment, useContext, useState } from 'react'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
import Map from '../../shared/components/UIElements/Map'
import Modal from '../../shared/components/UIElements/Modal'
import { AuthContext } from '../../shared/context/auth-context'
// place has id, imageUrl, title, description, address, userId, location

const PlaceItem = ({ place, onDelete }) => {
  const { authorized } = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const toggleMap = () => setShowMap(s => !s)
  const toggleDeleting = () => setDeleting(d => !d)
  const handleDelete = () => {
    onDelete(place.id)
    toggleDeleting()
  }
  // place has id, imageUrl, title, description, address, userId, location
  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={toggleMap}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={toggleMap}>Close</Button>}
      >
        <div className="map-container">
          <Map center={place.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={deleting}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <Fragment>
            <Button inverse onClick={toggleDeleting}>
              Cancel
            </Button>
            <Button danger onClick={handleDelete}>
              Delete
            </Button>
          </Fragment>
        }
      >
        <p>Do you want to delete this place? This cannot be undone</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={place.imageURL} alt={place.title} />
          </div>
          <div className="place-item__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={toggleMap}>
              View on Map
            </Button>
            {authorized && <Button to={`/places/${place.id}`}>Edit</Button>}
            {authorized && (
              <Button danger onClick={toggleDeleting}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  )
}

export default PlaceItem

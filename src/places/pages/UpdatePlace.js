import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { useForm } from '../../shared/components/hooks/form'
import Card from '../../shared/components/UIElements/Card'
import { VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import './PlaceForm.css'

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

const UpdatePlace = () => {
  const id = useParams().id
  const place = PLACES.find(p => p.id === id)
  const [state, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        valid: false,
      },
      description: {
        value: '',
        valid: false,
      },
    },
    true
  )

  const onSubmit = e => {
    e.preventDefault()
    console.log(state.inputs)
  }

  useEffect(() => {
    if (place) {
      setFormData(
        {
          name: {
            value: place.title,
            valid: true,
          },
          description: {
            value: place.description,
            valid: true,
          },
        },
        true
      )
    }
  }, [setFormData, place])

  if (!place) {
    return (
      <Card className="center">
        <h2>Oops, can't find what you were looking for...</h2>
      </Card>
    )
  }

  if (!state.inputs.name.value) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    )
  }

  return (
    <form className="place-form" onSubmit={onSubmit}>
      <Input
        id="name"
        el="input"
        type="text"
        label="Name"
        validators={[VALIDATOR_MINLENGTH()]}
        onInput={inputHandler}
        value={state.inputs.name.value}
        valid={state.inputs.name.valid}
      />
      <Input
        id="description"
        el="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMessage="Valid description should have at least 5 characters"
        onInput={inputHandler}
        value={state.inputs.description.value}
        valid={state.inputs.description.valid}
      />
      <Button type="submit" disabled={!state.valid}>
        Update Place
      </Button>
    </form>
  )
}

export default UpdatePlace

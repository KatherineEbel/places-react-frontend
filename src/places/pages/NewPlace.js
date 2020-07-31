import React from 'react'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import './PlaceForm.css'
import { useForm } from '../../shared/components/hooks/form'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators'

const NewPlace = () => {
  const [state, inputHandler] = useForm(
    {
      name: {
        value: '',
        valid: false,
      },
      description: {
        value: '',
        valid: false,
      },
      address: {
        value: '',
        valid: false,
      },
    },
    false
  )

  const onSubmit = e => {
    e.preventDefault()
  }
  return (
    <form className="place-form" onSubmit={onSubmit}>
      <Input
        id="name"
        el="input"
        type="text"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorMessage="Please enter a valid name"
        onInput={inputHandler}
      />
      <Input
        id="address"
        el="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorMessage="Please enter a valid address"
        onInput={inputHandler}
      />
      <Input
        id="description"
        el="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMessage="Valid description should have at least 5 characters"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!state.valid}>
        Add Place
      </Button>
    </form>
  )
}

export default NewPlace

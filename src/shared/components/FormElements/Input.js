import React, { useReducer, useEffect } from 'react'
import './Input.css'
import { validate } from '../../util/validators'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        valid: validate(action.value, action.validators),
      }
    case 'DIRTY':
      return {
        ...state,
        dirty: true,
      }
    default:
      return state
  }
}

const Input = props => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: props.value || '',
    valid: props.valid || false,
    dirty: false,
  })
  const { value, valid } = state
  const { id, onInput } = props

  useEffect(() => {
    onInput(id, value, valid)
  }, [id, value, valid, onInput])

  const onChange = e => {
    dispatch({
      type: 'CHANGE',
      value: e.target.value,
      validators: props.validators,
    })
  }

  const onTouch = () => {
    dispatch({ type: 'DIRTY' })
  }

  const el =
    props.el === `input` ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChange}
        onBlur={onTouch}
        value={state.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={onChange}
        onBlur={onTouch}
        value={state.value}
      />
    )

  const invalid = !state.valid && state.dirty
  return (
    <div
      className={`form-control ${
        invalid && state.dirty && 'form-control--invalid'
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {el}
      {invalid && state.dirty && <p>{props.errorMessage}</p>}
    </div>
  )
}

export default Input

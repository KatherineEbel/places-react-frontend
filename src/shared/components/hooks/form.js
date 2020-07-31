import { useCallback, useReducer } from 'react'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let valid = true
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue
        }
        if (inputId === action.inputId) {
          valid = valid && action.valid
        } else {
          valid = valid && state.inputs[inputId].valid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, valid: action.valid },
        },
        valid,
      }
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        valid: action.valid,
      }
    default:
      return state
  }
}

export const useForm = (inputs, valid) => {
  const [state, dispatch] = useReducer(formReducer, {
    inputs,
    valid,
  })

  const inputHandler = useCallback((inputId, value, valid) => {
    dispatch({ type: 'INPUT_CHANGE', value, inputId, valid })
  }, [])

  const setFormData = useCallback((inputs, valid) => {
    dispatch({
      type: 'SET_DATA',
      inputs,
      valid,
    })
  }, [])
  return [state, inputHandler, setFormData]
}

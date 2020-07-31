import React, { useContext, useState } from 'react'
import './Auth.css'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { useForm } from '../../shared/components/hooks/form'
import Card from '../../shared/components/UIElements/Card'
import { AuthContext } from '../../shared/context/auth-context'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators'

const authModes = {
  SignUp: 'signUp',
  SignIn: 'signIn',
}

const Auth = () => {
  const { signIn } = useContext(AuthContext)
  const [authMode, setAuthMode] = useState(authModes.SignIn)
  const [state, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        valid: false,
      },
      password: {
        value: '',
        valid: false,
      },
    },
    false
  )

  const onSubmit = e => {
    e.preventDefault()
    console.log(state.inputs)
    signIn()
  }

  const toggleAuthMode = () => {
    if (authMode === authModes.SignUp) {
      const valid = state.inputs.email.valid && state.inputs.password.valid
      setFormData(
        {
          ...state.inputs,
          userName: undefined,
        },
        valid
      )
    } else {
      setFormData(
        {
          ...state.inputs,
          userName: {
            value: '',
            valid: false,
          },
        },
        false
      )
    }
    setAuthMode(mode => {
      return mode === authModes.SignUp ? authModes.SignIn : authModes.SignUp
    })
  }

  return (
    <Card className="authentication">
      <h2 className="authentication__header">
        Sign {authMode === authModes.SignIn ? 'In' : 'Up'}
      </h2>
      <hr />
      <form onSubmit={onSubmit}>
        {authMode === authModes.SignUp && (
          <Input
            id="userName"
            el="input"
            type="text"
            label="Username"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            errorMessage="Username is required and must be at least 3 characters"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          el="input"
          type="email"
          label="Email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorMessage="Email is required, and must be valid"
          onInput={inputHandler}
        />
        <Input
          id="password"
          el="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          errorMessage="Password is required and must be at least 6 characters"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!state.valid}>
          {authMode === authModes.SignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
      <p>
        {authMode === authModes.SignUp ? 'Already a member?' : 'Not a member?'}
      </p>
      <Button onClick={toggleAuthMode}>
        {authMode === authModes.SignUp ? 'Sign In' : 'Sign Up'}
      </Button>
    </Card>
  )
}

export default Auth

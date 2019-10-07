import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from './button'
import axios from 'axios'
import { navigate } from 'gatsby'

const Form = styled.form`
  display: flex;
  padding: 4rem 8rem;
  flex-direction: column;
  min-height: 60vh;
  justify-content: center;
  margin: 0;
  border-bottom: 2px solid rgb(51,51,51, 0.2);

  h2 {
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
  }

  input {
    padding: 1rem;
    border: 0;
    margin-bottom: 1rem;
    outline: 0;
    font-weight: 300;
  }
`;

const Connect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 2rem;
  margin-bottom: 4rem;

  span {
    grid-column: span 2;
    font-weight: 2;
    text-transform: uppercase;
  }

  button {
    padding: 0.5rem;
    color: rgb(51,51,51);
    border: 1px solid rgb(51,51,51);
    font-size: 16px;
    background: transparent;
  }
`;

const RegisterForm = () => {

  const [firstName, handleFirstName] = useState('')
  const [lastName, handleLastName] = useState('')
  const [email, handleEmail] = useState('')
  const [password, handlePassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {

    e.preventDefault()

    axios.get('https://andnone.co/saintcenter/api/get_nonce/?controller=user&method=register')
    .then((res) => {

      const { nonce } = res.data
      console.log(nonce)

      return axios.post(`https://andnone.co/saintcenter/api/user/register/?username=${firstName}${lastName}&email=${email}&display_name=${firstName}${lastName}&nonce=${nonce}&user_pass=${password}`)
      .then(res => {
        const { status, cookie } = res.data;
        console.log('status', status)
        if(status === 'ok'){
          localStorage.setItem('cookie', cookie)
          localStorage.setItem('user', {
            email: email,
            firstName: firstName,
            lastName: lastName
          })

          dispatch({
            type: 'USER_SIGNIN',
            payload: {
              email: email,
              firstName: firstName,
              lastName: lastName
            }
          })

          navigate('/')
        } else {
          throw new Error(res)
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.error(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Connect>
        <span>Connect With</span>
        <Button ghost>Facebook</Button>
        <Button ghost>Google</Button>
      </Connect>
      <input type='text' value={firstName} placeholder='First Name' onChange={e => handleFirstName(e.target.value)} />
      <input type='text' value={lastName} placeholder='Last Name' onChange={e => handleLastName(e.target.value)} />
      <input type='email' value={email} placeholder='Email address' onChange={e => handleEmail(e.target.value)} />
      <input type='password' value={password} placeholder='Password' onChange={e => handlePassword(e.target.value)} />
      <Button>Register</Button>
    </Form>
  )
}

export default RegisterForm;

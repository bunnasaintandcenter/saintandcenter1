import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Button from './button'
import states from '../utils/states'
import useShippingForm from '../hooks/useShippingForm'
import axios from 'axios'

const Form = styled.form`

  label {
    display: block;

    span {
      display: block;
      font-size: 16px;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
  }

  input {
    padding: 1rem;
    border: 0;
    margin-bottom: 1rem;
    outline: 0;
    font-weight: 300;
    box-sizing: border-box;
    width: 100%;
  }

  select {
    appearance: none;
    padding: 1rem;
    border: 0;
    margin-bottom: 1rem;
    outline: 0;
    font-weight: 300;
    background: white;
    box-sizing: border-box;
    width: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShippingForm = ({ user, address, title }) => {

  const { first_name, last_name, address_1, address_2, city, state, postcode } = address

  const [editorOpen, toggleEditor] = useState(false)
  const dispatch = useDispatch()

  const editAddress = () => {

    const data = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      company: "",
      address_1: inputs.address_1,
      address_2: inputs.address_2,
      city: inputs.city,
      state: inputs.state,
      postcode: inputs.postcode,
      country: "US",
      email: user.email,
      phone: user.phone
    }

    axios.put(`https://andnone.co/saintcenter/wp-json/wc/v3/customers/3?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`,
      {
      ...user,
      [title]: data
    })
    .then(res => {
      dispatch({ type: 'USER_UPDATE_SHIPPING', payload: data })
      toggleEditor(false)
    })
    .catch(err => console.log(err.response.data))
  }

  const {inputs, handleInputChange, handleSubmit} = useShippingForm(editAddress)

  return (
    <div>
      <h2>{title}</h2>
      {editorOpen
        ?
          <Form onSubmit={handleSubmit}>
            <label htmlFor='first_name'>
              <input value={inputs.first_name} onChange={handleInputChange} name='first_name' type='text' placeholder='First Name' />
            </label>
            <label htmlFor='last_name'>
              <input value={inputs.last_name} onChange={handleInputChange} name='last_name' type='text' placeholder='Last Name' />
            </label>
            <label htmlFor='address_1'>
              <input value={inputs.address_1} onChange={handleInputChange} name='address_1' type='text' placeholder='Address Line 1' />
            </label>
            <label htmlFor='address_2'>
              <input value={inputs.address_2} onChange={handleInputChange} type='text' name='address_2' placeholder='Address Line 2' />
            </label>
            <label htmlFor='city'>
              <input value={inputs.city} onChange={handleInputChange} type='text' name='city' placeholder='City' />
            </label>
            <select defaultValue='' name='state' onChange={handleInputChange}>
              <option value={inputs.state} defaultValue='' disabled>Select State</option>
              {states.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </Form>
        : address
          ?
            <div>
              <p>{first_name} {last_name}</p>
              <p>{address_1}<br/>
              {address_2 &&
                <>{address_2}<br/></>
              }
              {city}, {state} {postcode}</p>
            </div>
          : <p>No {title} address</p>
      }
      <Actions>
      <Button onClick={() => toggleEditor(!editorOpen)}>{editorOpen ? 'Cancel' : 'Edit' }</Button>
      {editorOpen &&
        <Button primary onClick={handleSubmit}>
          Save
        </Button>
      }
      </Actions>
    </div>
  )
}

export default ShippingForm;

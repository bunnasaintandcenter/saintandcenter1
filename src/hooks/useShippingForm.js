import React, { useState } from 'react'

const useShippingForm = (callback) => {

  const [inputs, setInputs] = useState({})

  const handleSubmit = e => {
    if(e){
      e.preventDefault()
    }
    console.log('hey')
    callback()
  }

  const handleInputChange = e => {
    console.log(e.target.value)
    e.persist()
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useShippingForm

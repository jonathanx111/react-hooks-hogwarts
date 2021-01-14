import React, { useState } from 'react'

function HogForm({ onAddHog }) {

    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        weight: '',
        greased: false,
        highest_medial_achieved: ''
    })

    function handleSubmit(event) {
        event.preventDefault()
        onAddHog(formData)
        setFormData({
            name: '',
            specialty: '',
            weight: '',
            greased: false,
            highest_medial_achieved: ''
        })
    }
    
    function handleChange(event) {

        const key = event.target.id
        let value = event.target.value

        if (key === 'weight') {
            value = parseFloat(value)
        }

        setFormData({...formData, 
            [key]: value
        })

    }
    
    return (
        <form onSubmit={handleSubmit} id='form'>
            <label htmlFor='name'>Name: </label>
            <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange}></input>

            <label htmlFor='weight'>Weight: </label>
            <input type="number" id="weight" placeholder="Weight" value={formData.weight} onChange={handleChange}></input>

            <label htmlFor='specialty'>Specialty </label>
            <input type="text" id="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange}></input>

            <label htmlFor='greased'>Greased: </label>
            <input type="checkbox" id="greased" placeholder="Greased" value={formData.greased} onChange={handleChange}></input>

            <label htmlFor='medal'>Highest Medal: </label>
            <input type="text" id="medal" placeholder="Highest Medal Acheived" value={formData.highest_medal_achieved} onChange={handleChange}></input>

            <input type='submit' value="Submit"></input>
        </form>
    )
}

export default HogForm
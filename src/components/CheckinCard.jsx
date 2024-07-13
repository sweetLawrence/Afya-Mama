import React from 'react'

const CheckinCard = () => {
  return (
    <div className='check_in_card'>
        <div className="patient_details">
            <h2>Name: Brenda Andy</h2>
            <div className="id_number">ID Number: 13362803</div>
            <div className="age">Age: 34</div>
        </div>

        <div className="check_in_side">
            <button className="check_in_button">Check In</button>
        </div>
    </div>
  )
}

export default CheckinCard
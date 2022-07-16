import React from 'react'
import './booking.css'

function Booking() {
  return (
    <div className='box'>
        <div className="content">
            <div className="text">
                find your best stay!
            </div>
            <div className="target">
                <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                        <div className="hotel_name" id="target_name"></div>
                        <div className="price" id="targetPrice"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking
import React from 'react'
import './home.css'
function Home() {
  return (
    <div>
        <div className="container">
            <div className="content">
                <div className="text">
                 Book app   
                </div>
                <form action="#" className='form2'>
                    <div className="txt">
                        Date and time to you would like to stay
                    </div>
                    <div className="inputData">
                        <input type="date" name='' id="book-date" />
                    </div>
                    <div className="inputData">
                        <input type="time" name='' id="book-time" />
                    </div>
                    <div className="txt">
                        Date and time to you would like to leave
                    </div>
                    <div className="inputData">
                        <input type="date" name='' id="leave-date" />
                    </div>
                    <div className="inputData">
                        <input type="time" name='' id="leave-time" />
                    </div>
                    <div className="book">
                        <button type='submit'>Book</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home
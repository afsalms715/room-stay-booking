import React from 'react'
import './booking.css'
import { initializeApp } from 'firebase/app';
import { getDatabase,ref,set} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCNVDfbHn190CFb7yqGz45cLT-WZNwD85o",
    authDomain: "qatarstay-c9039.firebaseapp.com",
    projectId: "qatarstay-c9039",
    storageBucket: "qatarstay-c9039.appspot.com",
    messagingSenderId: "504258730159",
    appId: "1:504258730159:web:8ec57bec23c18c20849c5a",
    measurementId: "G-KNHYT7DJRX"
  };

  const app = initializeApp(firebaseConfig);
  const database=getDatabase();

function Booking() {
    let Hotels = [
        {
            name: "Hotel 1",
            price: "100",
            image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },

        {
            name: "Hotel 2",
            price: "200",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 3",
            price: "300",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 4",
            price: "400",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ]
  return (
    <div className='box'>
        <div className="content">
            <div className="text">
                Find your best stay!
            </div>
            {/* <div className="target">
                <div className="trgt">
                    <div className="card">
                        <img src={Hotels[0].image} id='targetImage' alt="" />
                        <div className="hotel_name" id="target_name"></div>
                        <div className="price" id="targetPrice"></div>
                    </div>
                </div>
            </div> */}
            <div className="cards">
                <div className="card-box">
                    <div className="card">
                        <img src={Hotels[0].image} alt="hotel" />
                        <div className="hotel-name">{Hotels[0].name}</div>
                        <div className="price">QR {Hotels[0].price}</div>
                    </div>
                    <div className="request">
                        <button className="btn">request</button>
                    </div>
                    {/* */}
                    <div className="card">
                        <img src={Hotels[1].image} alt="hotel" />
                        <div className="hotel-name">{Hotels[1].name}</div>
                        <div className="price">QR {Hotels[1].price}</div>
                    </div>
                    <div className="request">
                        <button className="btn">request</button>
                    </div>
                    {/* */}
                    <div className="card">
                        <img src={Hotels[2].image} alt="hotel" />
                        <div className="hotel-name">{Hotels[2].name}</div>
                        <div className="price">QR {Hotels[2].price}</div>
                    </div>
                    <div className="request">
                        <button className="btn">request</button>
                    </div>
                    {/* */}
                    <div className="card">
                        <img src={Hotels[3].image} alt="hotel" />
                        <div className="hotel-name">{Hotels[3].name}</div>
                        <div className="price">QR {Hotels[3].price}</div>
                    </div>
                    <div className="request">
                        <button className="btn">request</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking
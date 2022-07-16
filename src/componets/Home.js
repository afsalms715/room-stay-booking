import React,{useState} from 'react'
import './home.css'
import { initializeApp } from 'firebase/app';
import { getDatabase,ref,set} from 'firebase/database'
import Booking from './Booking'

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

function Home() {
    const[valid,setValid]=useState(true);
    const[hide,setHide]=useState(true);

    const handleSubmit=(e)=>{
        const book_date=document.getElementById("book-date");
        const book_time=document.getElementById("book-time");

        const leave_date=document.getElementById("leave-date");
        const leave_time=document.getElementById("leave-time");
        if(!book_date.value || !book_time.value || !leave_date.value ||!leave_time.value){
            alert('please fill all the field');
        }
        else{
            writeUserData();
        }
        function writeUserData(){
            const db=getDatabase();
            set(ref(db,'data/'),{
                bookingdate:book_date.value,
                bookingtime:book_time.value,
                leavingdate:leave_date.value,
                leavingtime:leave_time.value,
            });
        }
        alert("Your booking has been made");
        const BookingPageDiv=document.querySelector('.box');
        const container=document.querySelector('.container');
        setValid(!valid+BookingPageDiv.classList.add('show'));
        setHide(!hide+container.classList.add('hide'));
        return false;
    }

  return (
    <div>
        <Booking/>
        <div className="container">
            <div className="content">
                <div className="text">
                 Booking   
                </div>
                <form action="#" className='form2' onSubmit={handleSubmit}>
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
                        <button type='submit'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home

import './App.css';
import roomstaylogo from './roomstaylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Home from './componets/Home'
function App() {
  const[hide,setHide]=useState(true)
  const[show,setShow]=useState(true)

  const validationForm=(event)=>{
    const input1=document.getElementById('input1');
    const input2=document.getElementById('input2');
    const status=document.querySelector('.status');
    let validation="please fill the above fields";
    let emailvalidation="email validation error must include @ and .com Try again";
    let passwordvalidation="password char must not be lessthan 8";

    if(!input1.value){
      console.warn("validation error");
      status.classList.add('active');
    status.innerHTML=`${validation} `;
    }else{
      emailvalidate();
    }

    function emailvalidate(){ //funtion for email validation
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!input1.value.match(pattern)){
        console.warn("pattern failde")
        status.classList.add('active');
        status.innerHTML=`${emailvalidation}`
      }else{
        console.log("input1 validate")
        status.classList.remove('active');
        input1.classList.add("valid");
      }
    }
      if(!input2.value){
        console.warn("validaton error")
        status.classList.add("active");
        status.innerHTML=`${validation}`;
      }else{
        passwordValidate();
      }

      function passwordValidate(){
        if(input2.value.Length<8){
          console.warn("password char must not be less than 8");
          status.classList.add("active");
          status.innerHTML=`${passwordvalidation}`;
        }
        else{
          console.log('input2 validated');
          status.classList.remove("active");
          input2.classList.add("valid");
        }
      }
      if(input1.classList.contains('valid') && input2.classList.contains('valid')){
        console.log('submitted');
        setTimeout(()=>{
          let container =document.querySelector('.container');
          let wraper = document.querySelector('.wraper');
          setHide(!hide+wraper.classList.add("hide"));
          setShow(!show+container.classList.add("show"));
        },1000);  
      }
      return false;
    } 

  const handleMail=()=>{
    const input1=document.getElementById('input1');
    const status=document.querySelector('.status');
    let validation="please fill the  fields";
    let emailvalidation="email validation error must include @ and .com Try again";
    if(!input1.value){
      console.warn("validation error");
      status.classList.add('active');
    status.innerHTML=`${validation} `;
    }else{
      emailvalidate();
    }
    function emailvalidate(){ //funtion for email validation
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!input1.value.match(pattern)){
        console.warn("pattern failde")
        status.classList.add('active');
        status.innerHTML=`${emailvalidation}`
      }else{
        console.log("input1 validate")
        status.classList.remove('active');
        input1.classList.add("valid");
      }
    }
  }
  const handlePassword=()=>{
    const input2=document.getElementById('input2');
    const status=document.querySelector('.status');
    let validation="please fill the above fields";
    let passwordvalidation="password char must not be lessthan 8";

    if(!input2.value){
      console.warn("validaton error");
      status.classList.add("active");
      status.innerHTML=`${validation}`;
    }else{
      passwordValidate();
    }
    function passwordValidate(){
      if(input2.value.length<8){
        console.warn("password char must not be less than 8");
        status.classList.add("active");
        status.innerHTML=`${passwordvalidation}`;
      }
      else{
        console.log('input2 validated');
        status.classList.remove("active");
        input2.classList.add("valid");
      }
    }
  }

  return (
    <div className="App">
      <Home/>
      <div className="wraper">
        <div className="content">
          <div className="Logo">
            <img src={roomstaylogo} alt="" />
          </div>
          <div className="cl">
            <span>Become an member of QatarHomeStay today</span>
          </div>
          <div className="form">
            <div className="status"> 
                test 
            </div>
            <form action='#' onSubmit={validationForm}>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faUser}/>
                <input type="text" id="input1" placeholder='Enter Your Email Address' onKeyUp={handleMail} />
              </div>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faLock}/>
                <input type="password" id="input2" placeholder='Enter Your Password' onKeyUp={handlePassword} />
              </div>
              <div className="submit">
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

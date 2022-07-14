
import './App.css';
import roomstaylogo from './roomstaylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <div className="wraper">
        <div className="content">
          <div className="Logo">
            <img src={roomstaylogo} alt="" />
          </div>
          <div className="cl">
            <span>Become an member of HomeStay today</span>
          </div>
          <div className="form">
            <div className="status"> 
                test 
            </div>
            <form action='#'>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faUser}/>
                <input type="text" id="input1" placeholder='Enter Your Email Address' />
              </div>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faLock}/>
                <input type="password" id="input2" placeholder='Enter Your Password' />
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

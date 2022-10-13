import './App.css';

function App() {
  return (
    <div className="App">
      <body>

        <form>
          <h3><strong>Login</strong></h3><br></br>
          <p className="faded">Enter Your Credentials to access your account </p>


          <label className="lemail"> <strong>Email</strong></label>
          <input className="iemail" type="email" placeholder="Enter Your Email" id="username"></input>
          <label className="lpassword"><strong>password</strong></label>
          <div className='input-icons'>
          <input className="ipassword" type="password" placeholder="Enter Your password" id="password"></input>
          <i class="far fa-eye" id="togglePassword"></i>
          </div>
          
          <div className="checkeepfor">
            <input className="checkbox" type="checkbox"></input> &nbsp;
            <label><strong>Keep me signed in</strong></label>
            <a className="forpass" href="http://localhost:3000/?">Forgot password</a>
          </div>
          <button>Log In</button> <br></br><br></br>

          <p className='donthvac'>Don't have an account? &nbsp; <span className='signup' >Sign Up</span> </p>
        </form>
      </body>
    </div>
  );
}

export default App;

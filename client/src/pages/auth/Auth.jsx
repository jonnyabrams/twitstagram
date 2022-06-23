import './auth.css'
import Logo from '../../img/assets/twitstagram-logo.png'

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth_left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Twitstagram</h1>
          <h6>Can't choose between the two? Fret no longer!</h6>
        </div>
      </div>

      <LogIn />
    </div>
  )
}

const LogIn = () => {
  return (
    <div className="auth_right">
      <form className="info_form auth_form">
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="info_input" name="username" />
        </div>

        <div>
          <input type="password" className="info_input" placeholder="Password" name="password" />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account? Sign up!</span>
          <button className="button info_button">Log in</button>
        </div>
      </form>
    </div>
  )
}

const SignUp = () => {
  return (
    <div className="auth_right">
      <form className="info_form auth_form">
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder="First name" className="info_input" name="firstname" />
          <input type="text" placeholder="Last name" className="info_input" name="lastname" />
        </div>

        <div>
          <input type="text" placeholder="Username" className="info_input" name="username" />
        </div>

        <div>
          <input type="text" placeholder="Password" className="info_input" name="password" />
          <input type="text" placeholder="Confirm password" className="info_input" name="confirmpassword" />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>Already have an account? Log in!</span>
        </div>
        <button className="button info_button" type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Auth
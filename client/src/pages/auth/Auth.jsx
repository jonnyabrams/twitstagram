import './auth.css'
import { useState } from 'react'
import Logo from '../../img/assets/twitstagram-logo.png'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [data, setData] = useState({ firstname: "", lastname: "", username: "", email: "", password: "", confirmpassword: "" })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="auth">
      {/* Left side */}
      <div className="auth_left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Twitstagram</h1>
          <h6>Can't choose between the two? Fret no longer!</h6>
        </div>
      </div>
       {/* Right side */}
      <div className="auth_right">
        <form className="info_form auth_form">
          <h3>{ isSignUp ? "Sign up" : "Log in" }</h3>

          { isSignUp &&
            <>
              <div>
                <input type="text" placeholder="First name" className="info_input" name="firstname" onChange={handleChange} />
                <input type="text" placeholder="Last name" className="info_input" name="lastname" onChange={handleChange} />
              </div> 
            

              <div>
                <input type="text" placeholder="Username" className="info_input" name="username" onChange={handleChange} />
              </div>
            </>
          }

          <div>
            <input type="email" placeholder="Email" className="info_input" name="email" onChange={handleChange} />
          </div>

          <div>
            <input type="password" placeholder="Password" className="info_input" name="password" onChange={handleChange} />
            { isSignUp && <input type="password" placeholder="Confirm password" className="info_input" name="confirmpassword" onChange={handleChange} /> }
          </div>

          <div>
            <span style={{ fontSize: '12px', cursor: "pointer", color: "blue" }} onClick={ () => setIsSignUp(!isSignUp) }>
              <u>{ isSignUp ? "Already have an account? Log in!" : "Don't have an account? Sign up!" }</u>
            </span>
          </div>
          <button className="button info_button" type="submit">{ isSignUp ? "Sign up" : "Log in" }</button>
        </form>
      </div>   
    </div>
  )
}

export default Auth
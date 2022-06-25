import './auth.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Logo from '../../img/assets/twitstagram-logo.png'
import { logIn, signUp } from '../../redux/actions/authAction'

const Auth = () => {
  const dispatch = useDispatch()
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState({ 
    firstname: "", 
    lastname: "", 
    username: "", 
    email: "", 
    password: "", 
    confirmpassword: "" 
  })
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isSignUp) {
      data.password === data.confirmpassword ? dispatch(signUp(data)) : setPasswordsMatch(false)
      } else {
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setPasswordsMatch(true)
    setData({
      firstname: "", 
      lastname: "", 
      username: "", 
      email: "", 
      password: "", 
      confirmpassword: "" 
    })
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
        <form className="info_form auth_form" onSubmit={handleSubmit}>
          <h3>{ isSignUp ? "Sign up" : "Log in" }</h3>

          { isSignUp &&
            <>
              <div>
                <input type="text" placeholder="First name" className="info_input" name="firstname" onChange={handleChange} value={data.firstname} />
                <input type="text" placeholder="Last name" className="info_input" name="lastname" onChange={handleChange} value={data.lastname} />
              </div> 
            

              <div>
                <input type="text" placeholder="Username" className="info_input" name="username" onChange={handleChange} value={data.username} />
              </div>
            </>
          }

          <div>
            <input type="email" placeholder="Email" className="info_input" name="email" onChange={handleChange} value={data.email} />
          </div>

          <div>
            <input type="password" placeholder="Password" className="info_input" name="password" onChange={handleChange} value={data.password} />
            { isSignUp && <input type="password" placeholder="Confirm password" className="info_input" name="confirmpassword" onChange={handleChange} value={data.confirmpassword} /> }
          </div>
          <span style={{ display: passwordsMatch ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
            * Passwords do not match
          </span>
          <div>
            <span style={{ fontSize: '12px', cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={ () => { setIsSignUp(!isSignUp); resetForm() } }>
              { isSignUp ? "Already have an account? Log in!" : "Don't have an account? Sign up!" }
            </span>
          </div>
          <button className="button info_button" type="submit">{ isSignUp ? "Sign up" : "Log in" }</button>
        </form>
      </div>   
    </div>
  )
}

export default Auth
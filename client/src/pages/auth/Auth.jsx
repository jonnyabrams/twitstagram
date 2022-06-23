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

      <h1>Form</h1>
    </div>
  )
}

export default Auth
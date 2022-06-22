import './logoSearch.css'
import Logo from '../../img/assets/twitstagram-logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="logo_search">
      <img src={Logo} className="logo" alt="" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
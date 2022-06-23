import './infoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Your info</h4>
        <div>
          <UilPen width='2rem' height='1.2rem' />
        </div>
      </div>

      <div className="info">
        <span><b>Location </b></span>
        <span>London</span>
      </div>

      <div className="info">
        <span><b>Status </b></span>
        <span>In a relationship</span>
      </div>

      <div className="info">
        <span><b>Job </b></span>
        <span>Sumo referee</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard
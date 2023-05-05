import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import profile from '../../assets/profile.png'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='top'>
      <div className='topleft'>
      <BsFacebook className='topicon'/>
      <AiFillInstagram className='topicon'/>
      <BsWhatsapp className='topicon'/>
      </div>
      <div className='topcenter'>
        <ul className='toplist'>
            <li className='toplistitems'>HOME</li>
            <li className='toplistitems'>ABOUT</li>
            <li className='toplistitems'>CONTACT</li>
            <li className='toplistitems'>WRITE</li>
            <li className='toplistitems'>LOGOUT</li>
        </ul>
      </div>
      <div className='topright'>
        <img className='topimg' src={profile} alt="" />
        <BsSearch className='topsearchicon'/>
      </div>
    </div>
  )
}

export default Topbar

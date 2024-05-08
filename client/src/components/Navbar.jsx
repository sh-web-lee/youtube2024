import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'

const Navbar = () => {
  return (
    <div
      className=""
    >
      <div className="px-2.5 py-0 flex justify-between items-center">
        <div className="">
          <img src={logo} alt="logo" className='w-[120px]' />
        </div>
        <div className='flex gap-2.5 items-center'>
          <Link to="/?cat=art"><h6 className=''>ART</h6></Link>
          <Link to="/?cat=science"><h6 className=''>SCIENCE</h6></Link>
          <Link to="/?cat=technology"><h6 className=''>TECHNOLOGY</h6></Link>
          <Link to="/?cat=cinema"><h6 className=''>CINEMA</h6></Link>
          <Link to="/?cat=design"><h6 className=''>DESIGN</h6></Link>
          <Link to="/?cat=food"><h6 className=''>FOOD</h6></Link>
          <span className='cursor-pointer'>John</span>
          <span className='cursor-pointer'>Logout</span>
          <span className='cursor-pointer bg-[#b9e7e7] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
            <Link to="/write">Wtire</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
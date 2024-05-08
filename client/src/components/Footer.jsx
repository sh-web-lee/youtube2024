import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'


const Footer = () => {
  return (
    <footer className='mt-[100px] p-[20px] bg-light flex items-center justify-between'>
      <img src={logo} alt="logo" className='h-[50px]' />
      <span>
        Made with ❤ and <b>React.js</b>
      </span>
    </footer>
  )
}
export default Footer
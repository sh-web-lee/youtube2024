import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#b9e7e7]">
      <h1 className="text-teal text-[20px] mb-[20px]">LOGIN</h1>
      <form  className="flex flex-col p-[50px] bg-[#fff] gap-[20px] w-[400px]">
        <input required className="p-[10px] border-b-[1px] border-b-gray" type="text" placeholder="username" />
        <input required className="p-[10px] border-b-[1px] border-b-gray" type="password" placeholder="password" />
        <button
          className="p-[10px] border-none text-[#fff] bg-teal cursor-pointer"
          onClick={(e) => {e.preventDefault()}}
        >LOGIN</button>
        <p className="text-[12px] text-red text-center">This is an error!</p>
        <span className="text-[12px] text-center">Don't have an account? <Link className="text-teal" to="/register">Register</Link></span>
      </form>
    </div>
  )
}
export default Login
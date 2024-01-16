import style from './Navbar.css'

export default function Navbar() {
  return (
    <div id='navBar'>
        <a href='' className="logo">Logo</a>
        <h1 id='title'>Greatest Blog Ever.</h1>
        <ul className='navBarList'>
          <a href=""><li>Login</li></a>
          <a href=""><li>Register</li></a>
        </ul>
    </div>
  )
}
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><h1>Santo Bocado</h1></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/">Home</Link></li>
        <li><Link className="menu-link" to="/productos/sandwichs">Sandwichs</Link></li>
        <li><Link className="menu-link" to="/productos/postres">Postres</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default Navbar
import "./Header.css"

import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="#">
                <img className="logo-icon" src={logo} alt="Logotipo do Ignite"/>
                <h1 className="logo-text">Fireside</h1>
            </a>
        </header>
    )
}

export default Header
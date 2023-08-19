import { PencilLine } from 'phosphor-react'

import "./Sidebar.css"

import cover from '../../images/user-cover.jpeg'

import Avatar from '../Avatar/Avatar.jsx'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img className="cover" src={cover} />
            <div className="profile">
                <Avatar src="https://github.com/rafael-vas.png"/>
                <strong className="name">Rafael Vasconcelos</strong>
                <span className="role">Web Developer</span>
            </div>
            <footer className="footer">
                <a href="#" className="btn">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar;
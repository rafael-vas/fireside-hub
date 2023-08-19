import "./Avatar.css"

const Avatar = ({ src, hasBorder = true }) => {
    return (
        <img className={hasBorder ? "avatar-with-border" : "avatar"} src={src} alt="User avatar" />
    )
}

export default Avatar;
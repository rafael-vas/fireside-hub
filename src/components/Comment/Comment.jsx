import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";

import "./Comment.css"

import Avatar from "../Avatar/Avatar.jsx";

const Comment = ({ content, onDeleteComment }) => {

    const [likeCount, setLikeCount] = useState(0)

    function handleAddLike() {
        setLikeCount((state) => {
            return state + 1
        })

    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className="comment">
            <Avatar hasBorder={false} src="https://github.com/rafael-vas.png"/>
            <div className="box">
                <div className="content">
                    <header className="header">
                        <div className="info">
                            <strong className="name">Rafael Vasconcelos</strong>
                            <time className="time" title="15 de Agosto às 01:39h" dateTime="2023-08-15 01:38:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário" className="delete-btn">
                            <Trash
                                size={24}
                                className="icon"
                                onClick={handleDeleteComment}
                            />
                        </button>
                    </header>

                    <p className="message">{content}</p>
                </div>

                <footer className="footer">
                    <button className="like-btn" onClick={handleAddLike}>
                        <ThumbsUp className="icon" />
                        Aplaudir <span className="count">{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment;
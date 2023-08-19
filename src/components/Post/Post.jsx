import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import "./Post.css"

import defaultAvatar from '../../images/no-image-avatar.png'

import Comment from "../Comment/Comment.jsx";
import Avatar from "../Avatar/Avatar";


const Post = ({ author, content, publishedAt }) => {

    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewInvalidComment(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className="post">
            <header className="header">
                <div className="author">
                    <Avatar src={author.avatarUrl ?? defaultAvatar} />
                    <div className="author-info">
                        <strong className="name">{author.name ?? "Não identificado"}</strong>
                        <span className="role">{author.role ?? "Sem profissão"}</span>
                    </div>
                </div>

                <time className="time" title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className="content">
                {content.map(item => {
                    if(item.type === "paragraph") {
                        return <p key={item.content} className='text'>{item.content}</p>
                    } else if (item.type == "link") {
                        return (
                            <p className='text' key={item.content}>
                                <a className='link' target='_blank' href={item.content} rel="noreferrer">
                                    {item.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className="form">
                <strong className="label">Deixe seu comentário</strong>
                <textarea
                    className="comment"
                    name='comment'
                    value={newCommentText}
                    placeholder="Escreva a sua mensagem"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewInvalidComment}
                    required
                />

                <footer className="footer">
                    <button
                    className="btn"
                    type="submit"
                    disabled={isNewCommentEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>
            <div className="comment-list">
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}

export default Post;
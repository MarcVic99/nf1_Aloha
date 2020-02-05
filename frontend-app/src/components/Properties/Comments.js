import React, {useEffect, useState} from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setComments(
                await fetch('http://localhost/api/comment/${id}')
                    .then(res => res.json())
                    .then(res => res.comments))
        }
        fetchData() }, []);



    return (
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p> Comentarios</p>
                        {comment.content}
                    </li>
                ))}
            </ul>
            {/*    <div>{JSON.stringify(comments)}</div>;*/}
        </div>
    );

}

export default CommentsList;
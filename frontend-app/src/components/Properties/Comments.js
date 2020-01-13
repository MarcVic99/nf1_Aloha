import React, {useEffect, useState} from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setComments(
                await fetch('http://localhost/api/comment')
                    .then(res => res.json())
                    .then(res => res.comments))
        }
        fetchData() }, []);



    return (
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p> Contenido</p>
                        {comment.content}
                    </li>
                ))}
            </ul>
            {/*    <div>{JSON.stringify(comments)}</div>;*/}
        </div>
    );

}

export default CommentsList;
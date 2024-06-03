import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitFeedback = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: { comment },
        });
        setComment('');
        history.push('/results');
    };

    return (
        <>
            <h1>Leave a comment.</h1>
            <form onSubmit={submitFeedback}>
                <input
                    type='text'
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Add Any Comments"
                />
                <button type='submit'>NEXT</button>
            </form>
        </>
    );
}

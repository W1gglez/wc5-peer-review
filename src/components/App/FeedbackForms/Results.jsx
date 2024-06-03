import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Results() {
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);

    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeedback = () => {
        dispatch({ type: 'CLEAR_FEEDBACK' });
        history.push('/success');
    }

    return (
        <>
            <h1>Review your results</h1>
            <p>Feeling: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={submitFeedback}>Submit</button>
        </>
    );
}

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Success() {
    const history = useHistory();
    const leaveNewFeedback = () => {
        history.push('/');
    }

    return (
        <>
        <h1>Thank you!</h1>
        <button onClick={leaveNewFeedback}>Leave new Feedback</button>
        </>
    )
}
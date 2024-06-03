import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Understanding() {
	const [understanding, setUnderstanding] = useState('');
	const dispatch = useDispatch();
    const history = useHistory();

	const handleUnderstandingChange = (event) => {
		setUnderstanding(event.target.value);
	};

	const goToUnderstanding = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_UNDERSTANDING',
			payload: { understanding },
		});
		setUnderstanding('');
        history.push('/support');
	};

	return (
		<>
			<h1>How are you understanding the content?</h1>
			<form onSubmit={goToUnderstanding}>
				<input
					type='number'
					value={understanding}
					onChange={handleUnderstandingChange}
					placeholder="Rate how you're understanding"
				></input>
				<button type='submit'>NEXT</button>
			</form>
		</>
	);
}

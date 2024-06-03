import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Feelings() {
	const [feeling, setFeeling] = useState('');
	const dispatch = useDispatch();
    const history = useHistory();

	const handleFeelingChange = (event) => {
		setFeeling(event.target.value);
	};

	const goToUnderstanding = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_FEELINGS',
			payload: { feeling },
		});
		setFeeling('');
        history.push('/understanding');
	};

	return (
		<>
			<h1>How are you feeling today?</h1>
			<form onSubmit={goToUnderstanding}>
				<input
					type='number'
					value={feeling}
					onChange={handleFeelingChange}
					placeholder="Rate how you're feeling"
				></input>
				<button type='submit'>NEXT</button>
			</form>
		</>
	);
}

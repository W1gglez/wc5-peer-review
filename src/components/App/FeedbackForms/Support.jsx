import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Supports() {

	const [support, setSupport] = useState('');
	const dispatch = useDispatch();
    const history = useHistory();

	const handleSupportChange = (event) => {
		setSupport(event.target.value);
	};

	const goToComments = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_SUPPORT',
			payload: { support },
		});
		setSupport('');
        history.push('/comments');
	};

	return (
		<>
			<h1>How well are you being supported?</h1>
			<form onSubmit={goToComments}>
				<input
					type='number'
					value={support}
					onChange={handleSupportChange}
					placeholder="Rate how you're support"
				></input>
				<button type='submit'>NEXT</button>
			</form>
		</>
	);
}

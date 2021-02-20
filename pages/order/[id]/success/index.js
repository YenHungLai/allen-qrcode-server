import { useState } from 'react';
import styles from './index.module.css';

const Success = () => {
	const [form, setForm] = useState({});

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onClick = (e) => {
		e.preventDefault();

		console.log(form);
	};

	return (
		<div className={styles.root}>
			<h1>Success!</h1>
			<form className={styles.form}>
				<div className={styles.recipient}>
					<label htmlFor='recipient'>Recipient</label>
					<input type='text' name='recipient' onChange={onChange} />
				</div>
				<div>
					<label htmlFor='sign-time'>Signed at</label>
					<input type='datetime-local' name='sign-time' onChange={onChange} />
				</div>
				<button onClick={onClick} className={styles.submit} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Success;

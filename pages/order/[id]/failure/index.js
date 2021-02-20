import { useState } from 'react';
import styles from './index.module.css';

const Failure = () => {
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
			<h1>Failure!</h1>
			<form className={styles.form}>
				<div className={styles.recipient}>
					<label htmlFor='recipient'>Reason for failure</label>
					<input type='text' name='reason' onChange={onChange} />
				</div>
				<div>
					<label htmlFor='failure-time'>Failure time</label>
					<input type='datetime-local' name='failure-time' onChange={onChange} />
				</div>
				<button onClick={onClick} className={styles.submit} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Failure;

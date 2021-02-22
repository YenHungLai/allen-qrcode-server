import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styles from './index.module.css';

const REASONS = ['Nobody was home', "You didn't sign", 'Door was locked'];

const Failure = () => {
	const [form, setForm] = useState({});

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onClick = async (e) => {
		e.preventDefault();

		console.log(form);
		await axios.put(`${window.location.origin}/api/order`, {
			...form,
			failedAt: new Date().toISOString(),
		});
	};

	return (
		<div className={styles.root}>
			<h1>Failure!</h1>
			<form className={styles.form}>
				<div className={styles.recipient}>
					<label htmlFor='recipient'>Reason for failure</label>
					<select name='reason' onChange={onChange}>
						<option default>Please select a reason</option>
						{REASONS.map((reason, idx) => (
							<option key={idx} value={reason}>
								{reason}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='failure-time'>Failure time</label>
					<input
						readOnly
						type='text'
						name='failure-time'
						defaultValue={moment().format('YYYY/MM/DD HH:mm:ss')}
					/>
				</div>
				<button onClick={onClick} className={styles.submit} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Failure;

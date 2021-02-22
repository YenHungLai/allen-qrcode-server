import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import styles from './index.module.css';

const RECIPIENT = ['Person_A', 'Person_B', 'Person_C'];

const Success = () => {
	const [form, setForm] = useState({});
	const router = useRouter();
	const { id } = router.query;

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onClick = async (e) => {
		e.preventDefault();
		if (Object.keys(form).length === 0) return;

		console.log(form);
		await axios.put(`${window.location.origin}/api/order`, {
			...form,
			orderId: id,
			signedAt: new Date().toISOString(),
		});
	};

	return (
		<div className={styles.root}>
			<h1>Success!</h1>
			<form className={styles.form}>
				<div className={styles.recipient}>
					<label htmlFor='recipient'>Recipient</label>
					<select name='recipient' onChange={onChange}>
						<option default>Select a recipient</option>
						{RECIPIENT.map((recipient, idx) => (
							<option key={idx} value={recipient}>
								{recipient}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='sign-time'>Signed at</label>
					<input
						readOnly
						type='text'
						name='sign-time'
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

export default Success;

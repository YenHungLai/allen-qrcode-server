import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './index.module.css';

const Order = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className={styles.root}>
			<h1 className={styles.info}>
				Your order ID is <i>{id}</i>
			</h1>
			<div className={styles.buttons}>
				<Link href={`/order/${id}/success`}>
					<button className={styles.success}>Success</button>
				</Link>
				<Link href={`/order/${id}/failure`}>
					<button className={styles.failure}>Failure</button>
				</Link>
			</div>
		</div>
	);
};

export default Order;

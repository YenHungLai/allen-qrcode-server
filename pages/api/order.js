import oracledb from 'oracledb';

export default async (req, res) => {
	console.log(req.body);
	const { reason, failedAt } = req.body;

	let connection;
	try {
		connection = await oracledb.getConnection({
			user: 'JITIAN',
			password: 'Logic168',
			connectString: '192.168.137.1/JITIAN',
		});

		const result = await connection.execute(
			`INSERT INTO TEST(REASON,REASON_DATE,HWB) VALUES (${reason}, ${failedAt},'')`
		);
		connection.commit();

		res.json({ data: result.rows });
	} catch (err) {
		console.error(err);
		res.json({ msg: err });
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch (err) {
				console.error(err);
			}
		}
	}
};

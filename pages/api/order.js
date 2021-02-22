import oracledb from 'oracledb';

export default (req, res) => {
	console.log(req.body);

  let connection;
  try {
		connection = await oracledb.getConnection({
			user: 'JITIAN',
			password: 'Logic168',
			connectString: '192.168.137.1/ORCL',
		});

		const result = await connection.execute();
		console.log(result.rows);

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

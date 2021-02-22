import oracledb from "oracledb";

export default async (req, res) => {
  const { reason, failedAt, orderId } = req.body;
  console.log(req.body);

  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "JITIAN",
      password: "Logic168",
      connectString: "192.168.137.1/JITIAN",
    });

    const result = await connection.execute(
      `INSERT INTO QRCODE_SCAN(SCAN_VALUE, SCAN_DATE, SCAN_TYPE, HWB ) VALUES ('${reason}', '${failedAt}', 'Failure', '${orderId}')`
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

import oracledb from "oracledb";

export default async (req, res) => {
  const { recipient, signedAt, orderId } = req.body;
  console.log(req.body);

  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "JITIAN",
      password: "Logic168",
      connectString: "114.33.244.1/JITIAN",
    });

    const result = await connection.execute(
      `INSERT INTO QRCODE_SCAN(SCAN_VALUE, SCAN_DATE, SCAN_TYPE, HWB ) VALUES ('${recipient}', '${signedAt}', 'Success', '${orderId}')`
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

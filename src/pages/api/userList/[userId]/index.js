import { findUserById } from '../../../../backendLibs/db';
import { getMongoDb } from '../../../../backendLibs/mongodb';
import { ncOpts } from '../../../../backendLibs/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {

  const db = await getMongoDb();
  let userList = await findUserListByUserId(db,req.query.userId)
  res.json({ userList });
});

export default handler;

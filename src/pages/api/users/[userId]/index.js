import { findUserById } from '../../../../backendLibs/db';
import { getMongoDb } from '../../../../backendLibs/mongodb';
import { ncOpts } from '../../../../backendLibs/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();
  const user = await findUserById(db, req.query.userId);
  res.json({ user });
});

export default handler;
